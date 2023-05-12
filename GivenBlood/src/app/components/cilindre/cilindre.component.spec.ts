import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CilindreComponent } from './cilindre.component';

describe('CilindreComponent', () => {
  let component: CilindreComponent;
  let fixture: ComponentFixture<CilindreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CilindreComponent]
    });
    fixture = TestBed.createComponent(CilindreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
