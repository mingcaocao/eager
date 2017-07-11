import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { GoalsComponent } from './goals/goals.component';
import { RewardsComponent } from './rewards/rewards.component';
import { SettingsComponent } from './settings/settings.component';
import { OtherComponent } from './other/other.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { SubjectItemComponent } from './subject-item/subject-item.component';
import { RewardHistoryComponent } from './reward-history/reward-history.component';
import { TargetsComponent } from './targets/targets.component';

export const MODULE_ROUTES: Route[] =[
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'rewards', component: RewardsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'other', component: OtherComponent },
]

export const MODULE_COMPONENTS = [
  HomeComponent,
  SubjectsComponent,
  GoalsComponent,
  RewardsComponent,
  SettingsComponent,
  OtherComponent,
  ProgressbarComponent,
  SubjectItemComponent,
  RewardHistoryComponent,
  TargetsComponent
]
