import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuctionsComponent } from './fuctions.component';

describe('FuctionsComponent', () => {
  let component: FuctionsComponent;
  let fixture: ComponentFixture<FuctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
