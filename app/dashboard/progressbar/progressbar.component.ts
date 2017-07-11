import { Component, OnInit } from '@angular/core';
import initChartsPage = require('../../../assets/js/init/initChartsPage.js');

@Component({
  moduleId: module.id,
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initChartsPage();
  }

}
