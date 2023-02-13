import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/message.service';

enum MESSAGE_TYPE {
  Confirmation,
  Warning
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MessageService) {
  }

  ngOnInit(): void {
  }
}
