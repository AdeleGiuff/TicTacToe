//inlineTemplate e inlineStyle component
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quadrato',
  template: `<div class="pulsante">
    {{ valore }}
    <button class="btn-play" [disabled]="disabilitato" (click)="buttonClick()">
      play
    </button>
  </div>`,
})
export class QuadratoComponent {
  //attraverso l'uso della keyword input permettiamo che la proprietà sia inserita nel componente.
  //Quando una componente ha un solo input viene chiamata componente UI

  @Input() valore!: 'X' | 'O';
  @Output() onPlay = new EventEmitter<string>();
  @Input() disabilitato: boolean = false;

  ngOnInit() {}

  buttonClick() {
    this.onPlay.emit(this.valore);
  }
}
