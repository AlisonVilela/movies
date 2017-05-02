import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './shared/404/404.component';

const appRoutes: Routes = [
  { path: '', loadChildren: 'app/movies/movies.module#MoviesModule' },
  { path: '**', component:  NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
