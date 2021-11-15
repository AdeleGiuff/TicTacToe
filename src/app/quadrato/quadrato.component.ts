//inlineTemplate e inlineStyle component
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quadrato',
  template: ` <button class="pulsante">{{ valore }}</button> `,
})
export class QuadratoComponent {
  //attraverso l'uso della keyword input permettiamo che la proprietà sia inserita nel componente.
  //Quando una componente ha un solo input viene chiamata componente UI
  @Input() valore!: 'X' | 'O';
}
