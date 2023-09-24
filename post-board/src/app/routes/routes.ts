import { Routes } from "@angular/router";
import { BoardComponent } from "../components/board/board.component";
import { FavoritesComponent } from "../components/favorites/favorites.component";
import { BoardResolver } from "../resolvers/board.resolver";

export const appRoutes: Routes = [
  {
    path: 'board', component: BoardComponent, resolve: {
      init: BoardResolver
    }
  },
  { path: 'favorites', component: FavoritesComponent, },
  { path: '', redirectTo: '/board', pathMatch: 'full' }
]
