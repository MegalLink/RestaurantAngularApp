import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './pages/inicio/inicio.component'
import {ContactoComponent} from './pages/contacto/contacto.component'
import {EventosComponent} from './pages/eventos/eventos.component'
import { MenuComponent } from './pages/menu/menu.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'menu', component:MenuComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'eventos', component:EventosComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'ofertas', component:OfertasComponent},
  {path:'**',pathMatch:'full',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
