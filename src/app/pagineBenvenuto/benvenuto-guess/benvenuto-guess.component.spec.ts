import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenvenutoGuessComponent } from './benvenuto-guess.component';

describe('BenvenutoGuessComponent', () => {
  let component: BenvenutoGuessComponent;
  let fixture: ComponentFixture<BenvenutoGuessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenvenutoGuessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenvenutoGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
