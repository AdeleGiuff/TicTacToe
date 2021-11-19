import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoLetteraComponent } from './inserimento-lettera.component';

describe('InserimentoLetteraComponent', () => {
  let component: InserimentoLetteraComponent;
  let fixture: ComponentFixture<InserimentoLetteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserimentoLetteraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserimentoLetteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
