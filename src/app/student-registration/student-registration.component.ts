import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AlertifyService } from 'src/app/alertify.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistration implements OnInit {

  studRegisterForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    $("#homeTab").removeClass("active");
    $("#regTab").addClass("active");
    $("#loginTab").removeClass("active");
    $("#signinTab").removeClass("active");

    this.studRegisterForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      grade: ['', Validators.required],
      DOB : ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
      telNo: ['', Validators.required],
      mobile: ['', Validators.required,Validators.pattern("^(\+\d{1,3}[- ]?)?\d{10}$")],
      fatherEmail: ['', Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
      motherEmail: ['', Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
      studentEmail: ['',Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
      note: ['',Validators.required]
    });


  }
  get f() { return this.studRegisterForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.studRegisterForm.invalid) {
      return;
    }else{
      //this.alertify.success("Student Registered successfully...");
    }
   
    // this.loading = true;
    // this.router.navigate(['/login']);
    // error => {
    //   this.loading = false;
    }
  

  reset(){
    this.studRegisterForm.reset();
  }
}
