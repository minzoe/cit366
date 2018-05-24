import { Component, OnInit } from '@angular/core';
import {Message} from "./message.model";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [
    new Message("1", "Pizza", "Let's get pizza", "Sam"),
    new Message("2", "Huns", "The Huns are invading", "Fa Mulan"),
    new Message("3", "Travel Ideas", "I was thinking of going to South America", "Carl"),
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }

}
