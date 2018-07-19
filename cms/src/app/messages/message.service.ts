import {EventEmitter, Injectable} from '@angular/core';
import {Message} from "./message.model";
import {MOCKMESSAGES} from "./MOCKMESSAGES";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {ContactService} from "../contacts/contact.service";


@Injectable()
export class MessageService {
  messages: Message[] = [];
  messageChangeEvent = new EventEmitter<Message[]>();
  maxMessageId: number;

  constructor(private http: HttpClient) {
    this.initMessage();
  }

  getMessages(): Message[] {
    return this.messages.slice();
  }

  getMessage(id: string): Message {
    for (let message of this.messages) {
      if (message.id === id) {
        return message;
      }
    }
    return null;
  }

  initMessage() {
    this.http.get('https://angular-class-96953.firebaseio.com/messages.json')
      .subscribe(
        (messages: Message[]) => {
          this.messages = messages;
          this.messageChangeEvent.next(this.messages.slice());
        },
        (error: any) => {
          console.log(error);
        }
      )
    return this.messages.slice();
  }

  storeMessages() {
    const data = JSON.stringify(this.messages);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    this.http.put('https://angular-class-96953.firebaseio.com/messages.json', data, {headers: headers})
      .subscribe(
        () => {
          this.messageChangeEvent.next(this.messages.slice());
        }
      )
  }

  addMessage(message: Message) {
    this.messages.push(message);
    this.storeMessages();
  }

  getMaxId (): number {
    var maxId = 0;
    for (var i = 0; i < this.messages.length; i++) {
      var currentId = Number(this.messages[i]['id']);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

}
