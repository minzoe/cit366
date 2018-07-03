import { Component, OnInit, OnDestroy } from '@angular/core';
import {DocumentService} from "./document.service";
import  {Subscription} from "rxjs/Subscription";
import  {Document} from "./document.model";

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit, OnDestroy {
  selectedDocument: Document;
  documents: Document[];
  private subscription: Subscription;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.documentService.documentSelectedEvent
      .subscribe((document: Document) => {
        this.selectedDocument = document;
      });
    this.subscription = this.documentService.documentListChangedEvent
      .subscribe(
        (documentsList: Document[]) => {
          this.documents = documentsList;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
