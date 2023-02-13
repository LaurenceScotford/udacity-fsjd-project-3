import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/users';
import { AuthService } from 'src/app/auth/auth.service';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname = '';
  pword = '';
  fname = '';
  lname = '';
  runame = '';
  rpword = '';
  uname_available = true;

  constructor(private authService: AuthService, private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitRegister(regForm: NgForm) {
    this.authService.checkUserNameAvailability(this.runame).subscribe((availability: { username_available: any; }) => {
      if (availability.username_available) {
        const user: User = {
          auth_level: 0,
          first_name: this.fname,
          last_name: this.lname,
          username: this.runame,
          password: this.rpword
        }
        this.authService.register(user).subscribe((_user: any) => {
          this.messageService.setMessage('Your account has been registered! Please login ...', 'confirm');
          regForm.form.reset();
          this.router.navigate(['/login']);
        });
      } else {
        this.uname_available = false;
        this.messageService.setMessage('The username you have entered is not available! Please try another...', 'warn');
      }
    });
  }
}
