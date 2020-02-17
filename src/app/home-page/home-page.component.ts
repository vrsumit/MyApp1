import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#homeTab").addClass("active");
    $("#regTab").removeClass("active");
    $("#loginTab").removeClass("active");
    $("#signinTab").removeClass("active");
  }

}
