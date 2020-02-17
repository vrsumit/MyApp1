import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-textbook-order',
  templateUrl: './textbook-order.component.html',
  styleUrls: ['./textbook-order.component.scss']
})
export class TextbookOrderComponent implements OnInit {

  submitted = false;
  textbookOrderForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.textbookOrderForm = this.formBuilder.group({
      parishName: ['', Validators.required],
      parishAddress: ['', Validators.required],
      principalName: ['', Validators.required],
      principalContact: ['', Validators.required],
      contactName: ['', Validators.required],
      shippingAddr: ['', Validators.required],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactPhone: ['', Validators.required],
      alternatePhone: ['', Validators.required],
      schoolStartDate: ['', Validators.required],
      gestureNo: [''],
      preKgBooks: [''],
      KGBooks: [''],
      firstBooks: [''],
      secondBooks: [''],
      thirdBooks: [''],
      fourthBooks: [''],
      fifthBooks: [''],
      sixthBooks: [''],
      seventhBooks: [''],
      eighthBooks: [''],
      ninethBooks: [''],
      tenthBooks: [''],
      eleventhBooks: [''],
      twelthBooks: [''],
      comments: ['']
    });
 
  

  }
  onSubmit() {
    this.submitted = true;
    if (this.textbookOrderForm.invalid) {
      return;
    }
    else {
      alert("TextBooks ordered successfully...");
      console.log(this.textbookOrderForm.value);
    }
    this.textbookOrderForm.reset();
  }


}