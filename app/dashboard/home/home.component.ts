import { Component, OnInit } from '@angular/core';
import { Subject, SubjectService } from '../../services/subject.service';

import initVectorMap = require('../../../assets/js/init/initVectorMap.js');
import initCharts = require('../../../assets/js/init/charts.js');
import initAniCharts = require('../../../assets/js/init/initAniCharts.js');
import initTooltips= require('../../../assets/js/init/initTooltips.js');
import initNotify= require('../../../assets/js/init/notify.js');

@Component({
  selector: 'app-home',
  moduleId: module.id,
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  subjects: Subject[] = [];

  constructor(private subjectService: SubjectService) {
      this.subjects = this.subjectService.getSubjects();
  }

  ngOnInit() {
    initCharts();
    initVectorMap();
    initNotify();
    initAniCharts();
    initTooltips();
  }

}
