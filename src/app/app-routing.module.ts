import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CpmBusquedaComponent } from './componentes/cpm-busqueda/cpm-busqueda.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'busqueda', component: CpmBusquedaComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
