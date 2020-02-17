import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ovbs-registration',
  templateUrl: './ovbs-registration.component.html',
  styleUrls: ['./ovbs-registration.component.scss']
})
export class OVBSRegistrationComponent implements OnInit {

  submitted = false;
  ovbsRegisterForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.ovbsRegisterForm = this.formBuilder.group({
      churchName: ['', Validators.required],
      ovbsLoc: ['', Validators.required],
      parishName: ['', Validators.required],
      parentName:['',Validators.required],
      phNo:['',Validators.required],
      email:['',Validators.required],
      emargencyName:['',Validators.required],
      emargencyPh:['',Validators.required],
      firstName:['',Validators.required],
      middleName:[''],
      lastName:['',Validators.required],
      regType:[''],
      grade:['',Validators.required],
      age:['',Validators.required],
      day_date:['',Validators.required],
      TshirtSize:[''],
      tshirtQuantity:['',Validators.required],
      alergies:[''],
      parentTshirtSize:[''],
      parentTshirtQuantity:['']
    });

}
onSubmit() {
  this.submitted = true;
  if (this.ovbsRegisterForm.invalid) {
    return;
  }
  else {
   alert("Student Registered successfully...");
   console.log(this.ovbsRegisterForm.value);
  }
  this.ovbsRegisterForm.reset();
}

// onAddButtonClick(){
//   document.getElementById('child2Info').className="show";
//   document.getElementById('remove').className="show";

// }

// onRemoveButtonClick(){
//   document.getElementById('child2Info').className="hide";
//   document.getElementById('remove').className="hide";
// }

}
