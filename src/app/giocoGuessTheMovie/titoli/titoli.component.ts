import { Component, OnInit } from '@angular/core';
import { Titolo } from '../Titolo';

@Component({
  selector: 'app-titoli',
  templateUrl: './titoli.component.html',
  styleUrls: ['./titoli.component.css'],
})
export class TitoliComponent implements OnInit {
  titoli: Titolo[] = [];

  constructor() {}

  ngOnInit(): void {}
}
