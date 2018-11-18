import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, first} from 'rxjs/operators';

import { environment } from '../environments/environment';
import { User } from './user';
import { AuthService } from './auth.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient, private authService: AuthService) { }

  login(user :User): Observable<User>{
    var token = this.authService.getToken();
    if (token!=null){
      user.access_token = token;

      return of(user);//observable
    }
      var obs =  this.http.post<User>(`${environment.apiUrl}/login`,
                                user,
                                httpOptions);
obs.pipe(first())
          .subscribe(
              data => {
                //  this.router.navigate([this.returnUrl]);
                console.log("LoginService token "+data.access_token);
                this.authService.setToken(data.access_token);
              });
    return obs;

  }

}
