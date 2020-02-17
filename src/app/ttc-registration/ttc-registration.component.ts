import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-ttc-registration',
  templateUrl: './ttc-registration.component.html',
  styleUrls: ['./ttc-registration.component.scss']
})
export class TTCRegistrationComponent implements OnInit {

 submitted = false;

 constructor( private formBuilder : FormBuilder ,  private router: Router) { }
  TTCregistrationForm = new FormGroup({
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

  get f() { return this.TTCregistrationForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.TTCregistrationForm.invalid) {
      return;
    } else {
      alert("You have registered Successfully");
      this.TTCregistrationForm.reset();
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

    if (this.TTCregistrationForm.invalid) {
      return;
    }
  }

  ngOnInit() {
    this.TTCregistrationForm = this.formBuilder.group({
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
