import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre:string='';
  constructor(
    private router:Router,
    public wsService:WebsocketService) { }

  ngOnInit(): void {
  }
  ingresar(){
    if(this.nombre.trim().length===0){
      return;
    }
    this.wsService.loginWS(this.nombre).then( ()=>{
      this.router.navigateByUrl('/home')
    });
  }
}
