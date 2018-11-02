import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from '../component-communication.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm:FormGroup;
  formConfig:any = [
    {type:"text",name:'firstName',label:'First Name',constraint: Validators.required},
    {type:"radio",name:'lastName',label:'Last Name',constraint: Validators.required},
    {type:"password",name:'password',label:'Password',constraint: Validators.required},
  ];
  constructor(private service:ComponentCommunicationService, private builder:FormBuilder) { 
    this.LoginForm = this.builder.group({});
  }

  ngOnInit() {
    this.formConfig.forEach(element => {
      this.LoginForm.addControl(element.name,new FormControl('',{validators: element.constraint}))
    });
  }

  validate(){
    console.log(this.LoginForm.value);
    this.service.changeMessage('Logged');
  }

}
