import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterFormComponent } from './login-register-form.component';

describe('LoginRegisterFormComponent', () => {
  let component: LoginRegisterFormComponent;
  let fixture: ComponentFixture<LoginRegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRegisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
