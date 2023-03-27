import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from '../../src/app/components/login/login-form/login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render username input', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#username')).toBeTruthy();
  });

  it('should render password input', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#password')).toBeTruthy();
  });

  it('should render login button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button')).toBeTruthy();
  });
});
