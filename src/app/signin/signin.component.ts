import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Router, NavigationExtras } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  tdate: any;
  users = [];
  message: any;
  subscription: Subscription;

  constructor(private testservice: TestService, private formBuilder: FormBuilder, private router: Router) { }
  signinForm = new FormGroup({
    uname: new FormControl(''),
    pwd: new FormControl(''),
    agree: new FormControl('')
  });

  submit() {
    if (this.signinForm.invalid) {
      return
    } else {
      if(this.signinForm.value.uname == "admin"){
        localStorage.setItem("user", "admin");
      }
      else if(this.signinForm.value.uname == "event_owner"){
        localStorage.setItem("user", "event_owner");
      }
      this.router.navigate(['/portal']);
      // if (this.signinForm.value.uname == "user" && this.signinForm.value.pwd == "user") {
      //   this.router.navigate(['/portal']);
      // } else
      //   if (this.signinForm.value.uname == "admin" && this.signinForm.value.pwd == "admin") {
      //     this.router.navigate(['/admin']);
      //   } else {
      //     alert("Invalid Username or Password");
      //   }
    }
    this.signinForm.reset();
  }

  ngOnInit() {
    $("#homeTab").removeClass("active");
    $("#regTab").removeClass("active");
    $("#signinTab").removeClass("active");
    $("#loginTab").addClass("active");

    this.signinForm = this.formBuilder.group({
      uname: ['', Validators.required],
      pwd: ['', Validators.required]

    });

    this.subscription = this.testservice.getMessage().subscribe(message => { this.message = message; });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

