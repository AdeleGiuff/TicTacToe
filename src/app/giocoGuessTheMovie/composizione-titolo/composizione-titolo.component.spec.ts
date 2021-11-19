import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposizioneTitoloComponent } from './composizione-titolo.component';

describe('ComposizioneTitoloComponent', () => {
  let component: ComposizioneTitoloComponent;
  let fixture: ComponentFixture<ComposizioneTitoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposizioneTitoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposizioneTitoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
