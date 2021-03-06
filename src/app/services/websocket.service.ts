import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus:boolean=false;
  public usuario:Usuario

  constructor(private socket: Socket, private router: Router ) { 
    this.cargarStorage();
    this.checkStatus();
    this.cargarStorage();
  }

  checkStatus(){
    this.socket.on('connect',()=>{
      //console.log('Conectado al server')
      this.socketStatus=true;
    })
    this.socket.on('disconnect',()=>{
      //console.log('Desconectado del server')
      this.socketStatus=false;
    })
  }

  emitir(evento:string, payload?:any, callback?:Function){

    this.socket.emit(evento, payload,callback);
  }

  escuchar(evento:string){
      return this.socket.fromEvent( evento );
  }

  loginWS(nombre:string){

    return new Promise<void>( (resolve, reject) =>{
      
      this.emitir('configurar-usuario',{ nombre }, ( resp:any )=>{
        if(resp.ok){
          this.usuario = new Usuario(nombre);
          this.guardarStorage();
          resolve();
        }
      });

    });
  }

  logoutWS(){
    this.usuario = null;
    localStorage.removeItem('user');
    const payload ={ nombre:'sin-nombre' }
    this.emitir('configurar-usuario',payload, ()=>{});
    this.router.navigateByUrl('');
  }

  obtenerUsuario(){
    return this.usuario;
  }

  guardarStorage(){
    localStorage.setItem('user', JSON.stringify(this.usuario));
  }

  cargarStorage(){
    let userStorage =localStorage.getItem('user');
    if(userStorage){
      this.usuario = JSON.parse(userStorage);
      this.loginWS(this.usuario.nombre)
    }
  }
  // sendMessage(msg: string) {
  //   this.socket.emit('message', msg);
  // }

  // getMessage() {
  //   return this.socket.fromEvent('message')
  //              .pipe( map( (data:any) => data.msg ) );
  // }
}
