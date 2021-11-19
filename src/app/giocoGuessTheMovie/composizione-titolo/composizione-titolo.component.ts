import { Component, OnInit, Input } from '@angular/core';
import { Titolo } from '../Titolo';

@Component({
  selector: 'app-composizione-titolo',
  templateUrl: './composizione-titolo.component.html',
  styleUrls: ['./composizione-titolo.component.css'],
})
export class ComposizioneTitoloComponent implements OnInit {
  @Input() titolo: Titolo;

  constructor() {}

  ngOnInit(): void {}
}
