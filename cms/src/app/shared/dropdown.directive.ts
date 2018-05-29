import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.isOpen = true;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.isOpen = false;
  }
}
