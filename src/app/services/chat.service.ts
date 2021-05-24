import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private wsService:WebsocketService) { }

  sendMessage(mensaje:string){
    const payload ={
        de:this.wsService.usuario.nombre,
        cuerpo:mensaje
    }
    this.wsService.emitir('mensaje',payload);
  }
  getMenssage(){
    return this.wsService.escuchar('mensaje-nuevo');
  }

  getMenssagePrivate(){
    return this.wsService.escuchar('mensaje-privado');
  }

}
