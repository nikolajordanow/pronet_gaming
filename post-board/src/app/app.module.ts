import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { NoteService } from './services/notes.service';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ToasterService } from './services/toaster.service';
import { ToasterComponent } from './components/toaster/toaster.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { EffectsModule } from '@ngrx/effects';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NotesEffects } from './store/effects/notes.effects';
import { POST_BOARD_FEATURE_NAME } from './store/feature-name';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { notesReducer } from './store/reducers/notes.reducer';
import { environment } from './environments/environment.prod';
import { NotesSelector } from './store/selectors/notes.selector';
import { ToasterEffects } from './store/effects/toaster.effects';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { AppRoutingModule } from './app-routing.module';
import { NotesComponent } from './components/notes/notes.component';
import { BoardResolver } from './resolvers/board.resolver';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    NoteCardComponent,
    NoteFormComponent,
    ToasterComponent,
    ToolbarComponent,
    FavoritesComponent,
    NotesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatDialogModule,
    MatToolbarModule,
    BrowserModule, 
    FormsModule,
    EffectsModule.forRoot(
      NotesEffects,
      ToasterEffects
    ),
    StoreModule.forRoot({}),
    StoreModule.forFeature(POST_BOARD_FEATURE_NAME, notesReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    NoteService,
    ToasterService,
    NotesSelector,
    BoardResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
