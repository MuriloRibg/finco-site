import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacaoComponent } from './verificacao.component';

describe('VerificacaoComponent', () => {
  let component: VerificacaoComponent;
  let fixture: ComponentFixture<VerificacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerificacaoComponent]
    });
    fixture = TestBed.createComponent(VerificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
