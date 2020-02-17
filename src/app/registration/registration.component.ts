import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import * as $ from 'jquery';

export interface Parish {
  value: string;
  viewValue: string;
} 

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  constructor( private formBuilder : FormBuilder ,  private router: Router) { }
  registrationForm = new FormGroup({
    fname:new FormControl(''),
    lname:new FormControl(''),
    email:new FormControl(''),
    contact:new FormControl(''),
    parish:new FormControl(''),
    grade:new FormControl('')
  });

  parishes: Parish[] = [
    {value: 'teachers-0', viewValue: 'Teachers'},
    {value: 'principals-1', viewValue: 'Principals'},
    {value: 'staff-2', viewValue: 'Staff'}
  ];

  submit(){
    if(this.registrationForm.invalid){
      return
    }else{
     
      this.router.navigate(['/signin']);
  }
   this.registrationForm.reset(); 
  }

  cancel(){
    this.router.navigate(['/']);
  }

  ngOnInit() {
    $("#homeTab").removeClass("active");
    $("#regTab").removeClass("active");
    $("#loginTab").removeClass("active");
    $("#signinTab").addClass("active");
    
    this.registrationForm = this.formBuilder.group({
      fname : ['',Validators.required],
      lname : ['',Validators.required],
      email : ['',Validators.required],
      contact : ['',Validators.required],

    });

    

  }
 
}


