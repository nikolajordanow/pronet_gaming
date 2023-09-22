import { Routes } from "@angular/router";
import { BoardComponent } from "../components/board/board.component";
import { FavoritesComponent } from "../components/favorites/favorites.component";

export const appRoutes: Routes = [
  { path: 'board', component: BoardComponent },
  { path: 'favorites', component: FavoritesComponent, },
  { path: '', redirectTo: '/board', pathMatch: 'full' }
]
