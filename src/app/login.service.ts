import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) { }

  login(user :User): Observable<User>{

      return this.http.post<User>(`${environment.apiUrl}/login`,
                                user,
                                httpOptions);
                                //.pipe(catchError(=>console.log("KASKE!!!!")));

  }

}
