import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitoliComponent } from './titoli.component';

describe('TitoliComponent', () => {
  let component: TitoliComponent;
  let fixture: ComponentFixture<TitoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
