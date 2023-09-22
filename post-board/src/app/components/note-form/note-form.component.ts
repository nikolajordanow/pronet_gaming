import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent {
  constructor(
    private readonly _dialogRef: MatDialogRef<Note | boolean>,
    @Inject(MAT_DIALOG_DATA) public note: Note
  ) { }

  public post(): void {
    this._dialogRef.close(this.note);
  }

  public cancel(): void {
    this._dialogRef.close(false);
  }
}
