import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".page-header-wrapper").hide();
    var user = localStorage.getItem("user");
    if(user === "event_owner"){
      $(".total-people").text("3 People");
    }   
    $(".pl-wrapper").show();
    $("#flag2").hide();
    $("#flag1").hide();
  }

  setClasses(flag) {
    var user = localStorage.getItem("user");
    var classes = "";
    if(flag === 1 && user === "event_owner"){
      classes = "d-none";
    }
    return classes;
  }

  openPerson(flag){
    $(".pl-wrapper").hide();
    if(flag === 1){
      $("#flag1").show();
      $("#flag2").hide();
    }
    else{
      $("#flag2").show();
      $("#flag1").hide();
    }
  }

  showPeople(){
    $(".pl-wrapper").show();
    $("#flag2").hide();
    $("#flag1").hide();
  }
}
