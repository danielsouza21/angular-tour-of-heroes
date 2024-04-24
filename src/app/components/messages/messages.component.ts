import { Component } from '@angular/core';

import {
  NgIf,
  NgFor,
  UpperCasePipe,
  NgClass
} from '@angular/common';

import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    UpperCasePipe,
    NgClass
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {} //Angular only binds to public component properties
}
