import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantGiveComponent } from './want-give.component';

describe('WantGiveComponent', () => {
  let component: WantGiveComponent;
  let fixture: ComponentFixture<WantGiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WantGiveComponent]
    });
    fixture = TestBed.createComponent(WantGiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
