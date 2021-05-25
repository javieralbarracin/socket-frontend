import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listas-usuarios',
  templateUrl: './listas-usuarios.component.html',
  styleUrls: ['./listas-usuarios.component.css']
})
export class ListasUsuariosComponent implements OnInit {

  usuariosActivosObs:Observable<any>;

  constructor(private chatService : ChatService) { }

  ngOnInit(): void {
    this.usuariosActivosObs = this.chatService.getUsuariosActivos();
    // emitir la peticion para verificar usuarios conectados
    this.chatService.getUsuarios()

  }

}
