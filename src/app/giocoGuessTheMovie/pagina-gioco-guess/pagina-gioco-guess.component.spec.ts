import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaGiocoGuessComponent } from './pagina-gioco-guess.component';

describe('PaginaGiocoGuessComponent', () => {
  let component: PaginaGiocoGuessComponent;
  let fixture: ComponentFixture<PaginaGiocoGuessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaGiocoGuessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaGiocoGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
