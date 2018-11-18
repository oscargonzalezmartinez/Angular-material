import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getToken(): string {
    return localStorage.getItem('currentUserToken');
  }

  public setToken(token: string){
        localStorage.setItem('currentUserToken',token);//, JSON.stringify(user));
  }
}
