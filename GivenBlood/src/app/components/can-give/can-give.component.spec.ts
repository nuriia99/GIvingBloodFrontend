import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanGiveComponent } from './can-give.component';

describe('CanGiveComponent', () => {
  let component: CanGiveComponent;
  let fixture: ComponentFixture<CanGiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanGiveComponent]
    });
    fixture = TestBed.createComponent(CanGiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
