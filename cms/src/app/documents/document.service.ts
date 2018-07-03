import {EventEmitter, Injectable} from '@angular/core';
import {MOCKDOCUMENTS} from "./MOCKDOCUMENTS";
import {Document} from "./document.model";
import {Subject} from "rxjs/Subject";

@Injectable()
export class DocumentService {
  documents: Document[] = [];
  documentSelectedEvent = new EventEmitter<Document>();
  documentChangedEvent = new EventEmitter<Document[]>();
  documentListChangedEvent = new Subject<Document[]>();
  maxDocumentId: number;
  documentsListClone: Document[];

  constructor() {
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId();
  }

  getDocuments(): Document[] {
    return this.documents.slice();
  }

  getDocument(id: string): Document {
    for (let document of this.documents) {
      if (document.id === id) {
        return document;
      }
    }
    return null;
  }

  deleteDocument(document: Document) {
    if (document === null || document == undefined) {
      return;
    }

    const pos = this.documents.indexOf(document);
    if (pos < 0) {
      return;
    }
    this.documents.splice(pos, 1);
    this.documentsListClone = this.documents.slice();
    this.documentChangedEvent.next(this.documentsListClone);
  }

  addDocument(newDocument: Document) {
    if (newDocument == undefined || newDocument == null) {
      return
    }
    this.maxDocumentId++
    newDocument.id = this.maxDocumentId.toString();
    this.documents.push(newDocument);
    this.documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(this.documentsListClone);
  }

  updateDocument(originalDocument: Document, newDocument: Document) {
    if (originalDocument == null || originalDocument == undefined || newDocument == null || newDocument == undefined) {
      return;
    }
    var pos = this.documents.indexOf(originalDocument);
    if (pos < 0) {
      return;
    }
    newDocument.id = originalDocument.id;
    this.documents[pos] = newDocument;
    this.documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(this.documentsListClone);
  }

  getMaxId(): number {
    var maxId = 0;
    for(var i = 0; i<this.documents.length; i++) {
      var currentId = Number(this.documents[i]['id']);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

}
