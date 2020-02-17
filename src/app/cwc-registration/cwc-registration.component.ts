import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import * as $ from 'jquery';

declare var $: any;

@Component({
  selector: 'app-cwc-registration',
  templateUrl: './cwc-registration.component.html',
  styleUrls: ['./cwc-registration.component.scss']
})
export class CWCRegistrationComponent implements OnInit {
 
 submitted = false;

  constructor( private formBuilder : FormBuilder ,  private router: Router) { }
  CWCregistrationForm = new FormGroup({
    fname:new FormControl(''),
    mname:new FormControl(''),
    lname:new FormControl(''),
    email:new FormControl(''),
    parish:new FormControl(''),
    grade:new FormControl(''),
    tcenter:new FormControl(''),
    loc:new FormControl(''),
    group:new FormControl(''),
    cwcdate:new FormControl('')
  });
  
onSubmit(){
  this.submitted = true;
  if(this.CWCregistrationForm.invalid){
      return;
    };
}

  submit(){
  //   $("#subscribeForm").validate({
  //     rules: {
  //         list: {
  //             required: true,
  //             minlength: 1
  //         }
  //      }
  //  });

    if(this.CWCregistrationForm.invalid){
      return
    }
    // else{
     
    //   this.router.navigate(['/signin']);
    // }
   //this.CWCregistrationForm.reset(); 
  }

  ngOnInit() {
    this.CWCregistrationForm = this.formBuilder.group({
      fname : ['',Validators.required],
      lname : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      grade:  ['',Validators.required],
      parish: ['',Validators.required],
      tcenter : ['',Validators.required],
      loc:  ['',Validators.required],
      group: ['',Validators.required],
      cwcdate: ['',Validators.required]

    });

    $("#regTab").addClass("active");
    $("#homeTab").removeClass("active");

    // $(".popover-dismiss").popover({
    //   trigger: 'focus'
    // });

  }  

}
