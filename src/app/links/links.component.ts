import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import * as $ from 'jquery';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  constructor() { }

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

  ngOnInit() {
    $(".page-header-wrapper").hide();
    $("#searchList").show();
    $("#searchResult").hide()
    $("#editView").hide();
  }

  openSearch(){
    $("#searchList").hide();
    $("#searchResult").show()
  }

  editView(){
    $("#searchList").hide();
    $("#searchResult").hide()
    $("#editView").show();
  }

}
