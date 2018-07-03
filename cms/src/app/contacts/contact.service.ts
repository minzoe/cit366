import {EventEmitter, Injectable} from "@angular/core";
import {Contact} from "./contact.model";
import {MOCKCONTACTS} from "./MOCKCONTACTS";
import {Subject} from "rxjs/Subject";
import {Document} from "../documents/document.model";

@Injectable()
export class ContactService {
  contacts: Contact[] = [];

  contactSelectedEvent = new EventEmitter<Contact>();
  contactChangedEvent = new EventEmitter<Contact[]>();
  contactListChangedEvent = new Subject<Contact[]>();
  maxContactId: number;
  contactsListClone: Contact[];

  constructor() {
    this.contacts = MOCKCONTACTS;
    this.maxContactId = this.getMaxId();
  }

  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  getContact(id: string): Contact {
    for (let contact of this.contacts) {
      if (contact.id === id) {
        return contact;
      }
    }
    return null;
  }

  deleteContact(contact: Contact) {
    if (contact === null || contact === undefined) {
      return;
    }

    const pos = this.contacts.indexOf(contact);
    if (pos < 0) {
      return;
    }
    this.contacts.splice(pos, 1);
    this.contactsListClone = this.contacts.slice();
    this.contactChangedEvent.next(this.contactsListClone);
  }

  addContact(newContact: Contact) {
    if (newContact == undefined || newContact == null) {
      return
    }
    this.maxContactId++
    newContact.id = this.maxContactId.toString();
    this.contacts.push(newContact);
    this.contactsListClone = this.contacts.slice();
    this.contactListChangedEvent.next(this.contactsListClone);
  }

  updateContact(originalContact: Contact, newContact: Contact) {
    if (originalContact == null || originalContact == undefined || newContact == null || newContact == undefined) {
      return;
    }
    const pos = this.contacts.indexOf(originalContact);
    if (pos < 0) {
      return;
    }
    newContact.id = originalContact.id;
    this.contacts[pos] = newContact;
    this.contactsListClone = this.contacts.slice();
    this.contactListChangedEvent.next(this.contactsListClone);
  }

  getMaxId(): number {
    var maxId = 0;
    for(var i = 0; i<this.contacts.length; i++) {
      var currentId = Number(this.contacts[i]['id']);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }
}
