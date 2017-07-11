import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../../services/subject.service';

@Component({
  moduleId: module.id,
  selector: 'app-subject-item',
  templateUrl: './subject-item.component.html',
})
export class SubjectItemComponent implements OnInit {
  @Input() subject: Subject;
  constructor() { }

  ngOnInit() {
  }

}
