import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { ListasUsuariosComponent } from './components/listas-usuarios/listas-usuarios.component';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';

import { ChartsModule } from 'ng2-charts';
// import { GraficaComponent } from './components/grafica/grafica.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { GraficaComponent } from './pages/grafica/grafica.component';
import { EncuestasComponent } from './pages/encuestas/encuestas.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const config: SocketIoConfig = { url: environment.wsUrl , options: {} };

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent,
    ListasUsuariosComponent,
    LoginComponent,
    MensajesComponent,
    GraficaComponent,
    NavbarComponent,
    HomeComponent,
    EncuestasComponent,
    MapaComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    FormsModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
