import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoTitoloComponent } from './inserimento-titolo.component';

describe('InserimentoTitoloComponent', () => {
  let component: InserimentoTitoloComponent;
  let fixture: ComponentFixture<InserimentoTitoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserimentoTitoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserimentoTitoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
