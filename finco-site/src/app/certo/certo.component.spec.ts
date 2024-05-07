import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertoComponent } from './certo.component';

describe('CertoComponent', () => {
  let component: CertoComponent;
  let fixture: ComponentFixture<CertoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertoComponent]
    });
    fixture = TestBed.createComponent(CertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
