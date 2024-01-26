import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './components/artist/artist.component';

const routes: Routes = [
  {path:'artists', component: ArtistComponent},
  {path:'**', pathMatch:'full', redirectTo:'artists' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
