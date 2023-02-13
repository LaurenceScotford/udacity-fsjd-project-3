import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { MessageService } from './message.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udacity-fsjd-project-3';

  constructor(public cartService: CartService, private authService: AuthService, public messageService: MessageService) { }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
