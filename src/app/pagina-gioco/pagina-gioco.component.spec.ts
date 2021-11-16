import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaGiocoComponent } from './pagina-gioco.component';

describe('PaginaGiocoComponent', () => {
  let component: PaginaGiocoComponent;
  let fixture: ComponentFixture<PaginaGiocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaGiocoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaGiocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
