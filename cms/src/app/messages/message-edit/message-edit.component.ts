import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Message} from "../message.model";

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('msgTextInput') msgTextRef: ElementRef;
  @ViewChild('subjectInput') subjectRef: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();

  constructor() { }

  ngOnInit() {
  }

  onSendMessage() {
    const mesSubject = this.subjectRef.nativeElement.value;
    const mesText = this.msgTextRef.nativeElement.value;
    const currentSender = "Zoe Miner";

    const newMessage = new Message("4", mesSubject, mesText, currentSender);
    this.addMessageEvent.emit(newMessage);
  }

  onClear() {
    this.subjectRef.nativeElement.value = "";
    this.msgTextRef.nativeElement.value = "";
  }
}
