import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  public texto:string='';
  subscription:Subscription;
  mensajes:any[]=[]
  element:HTMLElement;
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.element = document.getElementById('chat-mensajes');

    this.subscription = this.chatService.getMenssage().subscribe(msg=>{
        this.mensajes.push( msg );
        setTimeout( ()=>{
          this.element.scrollTop = this.element.scrollHeight;
        },50);
    });
  }
  enviar(){
    //console.log(this.texto);
    if(this.texto.trim().length===0){
      return;
    }
    this.chatService.sendMessage(this.texto);
    this.texto='';
  }
  recibir(){

  }
  ngOnDestroy(){
      this.subscription.unsubscribe();
  }
}
