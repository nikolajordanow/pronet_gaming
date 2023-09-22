import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Note } from "../models/note";

@Injectable()
export class NoteService {

  public getAll(): Observable<Note[]> {
    return of(this._dbNotes);
  }

  public get(id: string): Note | undefined {
    return this._dbNotes.find(note => note.id === id);
  }

  public add(note: Note): Observable<Note> {
    return of(note);
  }

  public addToFavorites(note: Note): Observable<Note> {
    return of({
      ...note,
      isFavorite: !note.isFavorite
    });
  }

  public update(note: Note): Observable<Note> {
    const dbNote = this._dbNotes.find(n => n.id === note.id);
    if (dbNote) {
      return of({
        ...note,
        date: new Date()
      });
    }
    throw new Error('Note not found!');
  }

  public delete(id: string): Observable<string> {
    return of(id);
  }

  private _dbNotes: Note[] = [
    {
      id: crypto.randomUUID(),
      author: 'Lucas Anderson',
      content: 'Dont forget to buy groceries on the way home',
      date: new Date(),
      isFavorite: false
    },
    {
      id: crypto.randomUUID(),
      author: 'Sophia Ramirez',
      content: 'Call John to wish him a happy birthday.',
      date: new Date(),
      isFavorite: false
    },
    {
      id: crypto.randomUUID(),
      author: 'Aiden Patel',
      content: 'Research new marketing strategies for the upcoming campaign.',
      date: new Date(),
      isFavorite: false
    },
    {
      id: crypto.randomUUID(),
      author: 'Ava Mitchell',
      content: 'Practice piano for at least 30 minutes daily.',
      date: new Date(),
      isFavorite: false
    },
    {
      id: crypto.randomUUID(),
      author: 'Ethan Carter',
      content: 'Schedule a doctors appointment for the annual check-up.Schedule a doctors appointment for the annual check-up.Schedule a doctors appointment for the annual check-up.Schedule a doctors appointment for the annual check-up.Schedule a doctors appointment for the annual check-up.',
      date: new Date(),
      isFavorite: false
    }
  ];

}
