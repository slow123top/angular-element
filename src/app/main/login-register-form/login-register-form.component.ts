import { Component, OnInit, Input, Output } from '@angular/core';
import { Form } from '../../utils/form';
// import { FormBuilder, Form, FormGroup, FormControl, AbstractControl, validateResult } from '@angular/forms';
@Component({
  selector: 'app-login-register-form',
  templateUrl: './login-register-form.component.html',
  styleUrls: ['./login-register-form.component.css']
})
export class LoginRegisterFormComponent implements OnInit {
  @Input() formObj: Form;
  constructor() {
  }
  ngOnInit() {

  }
}
