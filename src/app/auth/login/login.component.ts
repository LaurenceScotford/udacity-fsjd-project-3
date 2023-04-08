import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { User } from '../auth.models';
import { AuthService } from 'src/app/auth/auth.service';
import { MessageService } from '../../message/message.service';
import * as AuthActions from '../auth.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname = '';
  pword = '';
  fname = '';
  lname = '';
  runame = '';
  rpword = '';
  uname_available = true;

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  onSubmitLogin(loginForm: NgForm) {
    const user: User = {
      auth_level: 0,
      first_name: '',
      last_name: '',
      username: this.uname,
      password: this.pword
    }

    this.store.dispatch(AuthActions.login({ userData: user }));
    // this.authService.login(user).subscribe(token => {
    //   this.authService.setSession(token);
    //   loginForm.form.reset();
    //   this.messageService.setMessage('You are now logged in', 'confirm');

    //   this.store.dispatch(AuthActions.apiLoginSuccessAction({
    //     token: token,
    //     user: user
    //   }));

    //   this.router.navigate(['/product-list/']);
    // });
  }
}
