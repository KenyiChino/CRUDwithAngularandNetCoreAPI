import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enquries } from './enquries';

describe('Enquries', () => {
  let component: Enquries;
  let fixture: ComponentFixture<Enquries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enquries],
    }).compileComponents();

    fixture = TestBed.createComponent(Enquries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
