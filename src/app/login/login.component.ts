import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../user';
import { LoginService } from '../login.service';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  constructor(private loginService: LoginService,
        private authService:AuthService,
        private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.user);
    //  this.submitted = true;

      // stop here if form is invalid
      //if (this.loginForm.invalid) {
      //    return;
      //}

      //this.loading = true;
      this.loginService.login(this.user)
          .pipe(first())
          .subscribe(
              data => {
                //  this.router.navigate([this.returnUrl]);
                console.log(this+" token "+data.access_token);
                this.router.navigate([this.returnUrl]);
              },
              error => {
                //  this.alertService.error(error);
                //  this.loading = false;
              });
  }
}
