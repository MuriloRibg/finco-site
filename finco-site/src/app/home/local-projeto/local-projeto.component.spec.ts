import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalProjetoComponent } from './local-projeto.component';

describe('LocalProjetoComponent', () => {
  let component: LocalProjetoComponent;
  let fixture: ComponentFixture<LocalProjetoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalProjetoComponent]
    });
    fixture = TestBed.createComponent(LocalProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
