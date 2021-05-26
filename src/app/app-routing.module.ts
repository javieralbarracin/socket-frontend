import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { UsuarioGuardService } from './guards/usuario-guard.service';
import { HomeComponent } from './pages/home/home.component';
import { GraficaComponent } from './pages/grafica/grafica.component';
import { EncuestasComponent } from './pages/encuestas/encuestas.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
    { path: '', redirectTo:'login', pathMatch:'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate:[ UsuarioGuardService ] },
    { path: 'mensajes', component: MensajesComponent, canActivate:[ UsuarioGuardService ] },
    { path: 'graficas', component: GraficaComponent, canActivate:[ UsuarioGuardService ] },
    { path: 'encuestas', component: EncuestasComponent, canActivate:[ UsuarioGuardService ] },
    { path: 'mapa', component: MapaComponent, canActivate:[ UsuarioGuardService ] },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
