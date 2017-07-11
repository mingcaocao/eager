import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }      from '@angular/forms'; // <-- NgModel lives here
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }       from '@angular/http';

import { MODULE_ROUTES,MODULE_COMPONENTS } from './dashboard.routes';

import { DashboardComponent } from './dashboard.component';

import { SubjectService } from '../services/subject.service';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild(MODULE_ROUTES),
        FormsModule,
        HttpModule,
    ],
    declarations: [ MODULE_COMPONENTS, DashboardComponent ],
    exports: [DashboardComponent],
    providers: [ SubjectService ]
})

export class DashboardModule{}
