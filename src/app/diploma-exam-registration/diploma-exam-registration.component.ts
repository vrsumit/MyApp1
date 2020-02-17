import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-diploma-exam-registration',
  templateUrl: './diploma-exam-registration.component.html',
  styleUrls: ['./diploma-exam-registration.component.scss']
})
export class DiplomaExamRegistrationComponent implements OnInit {


  submitted = false;

 constructor( private formBuilder : FormBuilder ,  private router: Router) { }
  DEregistrationForm = new FormGroup({
    pname: new FormControl(''),
    addr: new FormControl(''),
    prname: new FormControl(''),
    vname: new FormControl(''),
    pemail: new FormControl(''),
    phonenum1: new FormControl(''),
    phonenum2: new FormControl(''),
    phonenum3: new FormControl(''),
    sname: new FormControl(''),
    semail: new FormControl(''),
    mobile1: new FormControl(''),
    mobile2: new FormControl(''),
    mobile3: new FormControl(''),
    sele1: new FormControl('')
  });

  get f() { return this.DEregistrationForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.DEregistrationForm.invalid) {
      return;
    } else {
      alert("You have registered Successfully");
      this.DEregistrationForm.reset();
    }
  }

  register() {
    //   $("#subscribeForm").validate({
    //     rules: {
    //         list: {
    //             required: true,
    //             minlength: 1
    //         }
    //      }
    //  });

    if (this.DEregistrationForm.invalid) {
      return;
    }
  }

  ngOnInit() {
    this.DEregistrationForm = this.formBuilder.group({
      pname: ['', Validators.required],
      addr: ['', Validators.required],
      prname: ['', Validators.required],
      vname: ['', Validators.required],
      pemail: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      phonenum1: ['', Validators.required],
       phonenum2: ['', Validators.required],
      sname: ['', Validators.required],
      semail: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      mobile1: ['', Validators.required],
      mobile2: ['', Validators.required]
    });

  }
}
