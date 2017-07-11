import {Injectable} from '@angular/core';

export class Subject {
  constructor(
    public id: number,
    public title: string,
    public progress: number,
    public icon: string,
  ){}
}

@Injectable()
export class SubjectService {
  temp: any;
  getSubjects(): Subject[] {
    return subjects.map(s => new Subject(s.id, s.title, s.progress, s.icon));
  }

  getSubjectById(subjectId: number): Subject {
    this.temp = subjects.find(s => s.id === subjectId);
    return new Subject(this.temp.id, this.temp.title, this.temp.progress, this.temp.icon);
  }
}

var subjects = [
  {
    "id": 0,
    "title": "Improvement 1",
    "progress": 0.84,
    "icon": "timeline",
  },
  {
    "id": 1,
    "title": "Consistency 1",
    "progress": 0.99,
    "icon": "check_circle",
  },
  {
    "id": 2,
    "title": "Improvement 2",
    "progress": 0.74,
    "icon": "timeline",
  },
  {
    "id": 3,
    "title": "Attendence 1",
    "progress": 0.24,
    "icon": "assignment",
  },
  {
    "id": 4,
    "title": "Attendence 2",
    "progress": 0.54,
    "icon": "assignment",
  },
  {
    "id": 5,
    "title": "Consistency 2",
    "progress": 1,
    "icon": "check_circle",
  },
]
