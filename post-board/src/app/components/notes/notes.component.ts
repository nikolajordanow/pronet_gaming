import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Note } from 'src/app/models/note';
import * as noteActions from 'src/app/store/actions';
import { NoteFormComponent } from '../note-form/note-form.component';
import { Observable, map, of, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  private readonly _widthModal: string = '600px';
  private readonly _heightModal: string = '500px';

  @ViewChild('search')
  public search!: ElementRef;

  public formControl = new FormControl();

  public filteredNotes: Observable<Note[]> = of([]);

  private _notes: Note[] = [];

  public get notes(): Note[] {
    return this._notes;
  };

  @Input()
  public set notes(values: Note[]) {
    this._notes = values;
    this.filteredNotes = of(values);
    if (this.search?.nativeElement) {
      this.search.nativeElement.value = '';
    }
  }

  @Input()
  public showAdd: boolean = false;

  constructor(
    private readonly _store: Store,
    private readonly _dialog: MatDialog
  ) {
  }

  public ngOnInit() {
    this.filteredNotes = this.formControl.valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filter(value)
        )
      );
  }

  public addNote(): void {
    const dialogRef = this._dialog.open(NoteFormComponent, {
      width: this._widthModal,
      height: this._heightModal,
      data: {
        author: '',
        content: '',
        date: new Date(),
        isFavorite: false
      }
    });

    dialogRef.afterClosed().subscribe(note => {
      if (!!note) {
        this._store.dispatch(noteActions.AddNoteRequest({ note }));
      }
    });
  }

  public editNote(note: Note): void {
    const dialogRef = this._dialog.open(NoteFormComponent, {
      width: this._widthModal,
      height: this._heightModal,
      data: {
        id: note.id,
        author: note.author,
        content: note.content,
        date: new Date(),
        isFavorite: note.isFavorite
      }
    });

    dialogRef.afterClosed().subscribe(note => {
      if (!!note) {
        this._store.dispatch(noteActions.UpdateNoteRequest({ note }));
      }
    });
  }

  public removeNote(note: Note): void {
    this._store.dispatch(noteActions.DeleteNoteRequest({ id: note.id }));
  }

  public toggleFavorites(note: Note): void {
    this._store.dispatch(noteActions.ToggleFavoritesStatusRequest({ note }));
  }

  private _filter(value: string): Note[] {
    const filterValue = value.toLowerCase();

    return this.notes.filter(note => note.author.toLowerCase().includes(filterValue));
  }
}
