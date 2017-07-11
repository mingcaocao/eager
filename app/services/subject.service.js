"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Subject = (function () {
    function Subject(id, title, progress, icon) {
        this.id = id;
        this.title = title;
        this.progress = progress;
        this.icon = icon;
    }
    return Subject;
}());
exports.Subject = Subject;
var SubjectService = (function () {
    function SubjectService() {
    }
    SubjectService.prototype.getSubjects = function () {
        return subjects.map(function (s) { return new Subject(s.id, s.title, s.progress, s.icon); });
    };
    SubjectService.prototype.getSubjectById = function (subjectId) {
        this.temp = subjects.find(function (s) { return s.id === subjectId; });
        return new Subject(this.temp.id, this.temp.title, this.temp.progress, this.temp.icon);
    };
    SubjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SubjectService);
    return SubjectService;
}());
exports.SubjectService = SubjectService;
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
];
//# sourceMappingURL=subject.service.js.map