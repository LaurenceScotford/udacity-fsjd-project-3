import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, shareReplay, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/users';
import { MessageService } from '../message.service';

export interface usernameAvailability {
  username_available: Boolean;
}

export interface authToken {
  idToken: string;
  expiresIn: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private loginState: Subject<boolean> = false;

  private checkUsernameUrl = `${environment.apiURL}users/checkusername`;
  private registerUrl = `${environment.apiURL}users/register`;
  private authenticateUrl = `${environment.apiURL}users/authenticate`;
  private regFailMsg = 'Sorry! Something went wrong while we tried to complete your registration. Please try again later.';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  // Queries the server to check if a given username is available for use
  checkUserNameAvailability(username: string): Observable<usernameAvailability> {
    return this.http.post<usernameAvailability>(this.checkUsernameUrl, { username: username }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        this.messageService.setMessage(this.regFailMsg, 'warn');
        throw new Error(error.message);
      })
    );
  }

  // Attempts to login a user
  login(user: User): Observable<authToken> {
    return this.http.post<authToken>(this.authenticateUrl, user).pipe(
      shareReplay(),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        this.messageService.setMessage('Unable to login! Please check your username and password ...', 'warn');
        throw new Error(error.message);
      })
    );
  }

  // Creates a session with an authToken received after successful login
  setSession(authToken: authToken) {
    localStorage.setItem('id_token', authToken.idToken);
    localStorage.setItem('expires_at', JSON.stringify(Date.now() + authToken.expiresIn));
  }

  // Attempts to register a new user on the service
  register(user: User): Observable<User> {
    return this.http.post<User>(this.registerUrl, user).pipe(
      shareReplay(),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        this.messageService.setMessage(this.regFailMsg, 'warn');
        throw new Error(error.message);
      })
    );
  }

  // Returns true if a valid user is currently logged in, false otherwise
  isLoggedIn() {
    const token = localStorage.getItem('id_token');
    const expiry = localStorage.getItem('expires_at');

    if (!(token === null || expiry === null)) {
      const expiresAt = JSON.parse(expiry);
      if (Date.now < expiresAt) {
        return true;
      }
    }

    return false;
  }

}
