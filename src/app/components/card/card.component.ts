import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.scss' ]
})
export class CardComponent {
  @input()
  public header = "My fancy header"
  public body = "my fancy paragraph"; 

  public onOpenClick() {
    console.log('hola!');
  }
}