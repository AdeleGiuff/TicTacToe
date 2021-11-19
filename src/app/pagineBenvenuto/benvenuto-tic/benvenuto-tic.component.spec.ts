import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenvenutoTicComponent } from './benvenuto-tic.component';

describe('BenvenutoTicComponent', () => {
  let component: BenvenutoTicComponent;
  let fixture: ComponentFixture<BenvenutoTicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenvenutoTicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenvenutoTicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
