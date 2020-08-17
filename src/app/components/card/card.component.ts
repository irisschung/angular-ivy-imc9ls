import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'my-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.scss' ]
})
export class CardComponent {
  @input()header
  @input() body;

  @Output() open = new EventEmitter(); 

  public onOpenClick() {
    console.log('hola! from CardComponent!');
    this.open.emit();
  }
}