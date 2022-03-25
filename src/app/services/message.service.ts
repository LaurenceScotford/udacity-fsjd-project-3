import { Injectable } from '@angular/core';
import { Message } from '../models/message';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageObj: Message;

  constructor() { 
    this.messageObj = {
      message: '',
      type: 'confirm',
      datetime: Date.now()
    };
  }

  setMessage(message: string, type: 'confirm' | 'warn'): void {
    this.messageObj.message = message;
    this.messageObj.type = type;
    this.messageObj.datetime = Date.now();
  }
}
