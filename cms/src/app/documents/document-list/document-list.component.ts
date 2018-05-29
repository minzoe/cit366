import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  documents: Document[] = [
    new Document('1', 'Reports', 'A list of the reports.', 'alink', null),
    new Document('2', 'Users', 'A list of users.', 'alink', null),
    new Document('3', 'Clients', 'A list of clients.', 'alink', null),
    new Document('4', 'Fav Foods', 'A list of our favorite foods.', 'alink', null)
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }

}
