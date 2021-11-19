import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulsantiSuggerimentoComponent } from './pulsanti-suggerimento.component';

describe('PulsantiSuggerimentoComponent', () => {
  let component: PulsantiSuggerimentoComponent;
  let fixture: ComponentFixture<PulsantiSuggerimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulsantiSuggerimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PulsantiSuggerimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
