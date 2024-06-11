import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoieProjetoComponent } from './apoie-projeto.component';

describe('ApoieProjetoComponent', () => {
  let component: ApoieProjetoComponent;
  let fixture: ComponentFixture<ApoieProjetoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApoieProjetoComponent]
    });
    fixture = TestBed.createComponent(ApoieProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
