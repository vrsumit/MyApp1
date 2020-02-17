import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.panel-collapse').on('show.bs.collapse', function () {
      $(this).siblings('.panel-heading').addClass('active');
    });
  
    $('.panel-collapse').on('hide.bs.collapse', function () {
      $(this).siblings('.panel-heading').removeClass('active');
    });
  }

}
