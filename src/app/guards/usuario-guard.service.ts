import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WebsocketService } from '../services/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuardService implements CanActivate{

  constructor(
    private wsService:WebsocketService,
    private route: Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if( this.wsService.obtenerUsuario() ){
      return true;
    }else{
      this.route.navigateByUrl('login');
      return false;
    }
    //throw new Error('Method not implemented.');
  }
}
