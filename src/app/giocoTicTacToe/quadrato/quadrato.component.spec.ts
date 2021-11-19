import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadratoComponent } from './quadrato.component';

describe('QuadratoComponent', () => {
  let component: QuadratoComponent;
  let fixture: ComponentFixture<QuadratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
