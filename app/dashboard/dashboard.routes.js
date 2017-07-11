"use strict";
var home_component_1 = require('./home/home.component');
var subjects_component_1 = require('./subjects/subjects.component');
var goals_component_1 = require('./goals/goals.component');
var rewards_component_1 = require('./rewards/rewards.component');
var settings_component_1 = require('./settings/settings.component');
var other_component_1 = require('./other/other.component');
var progressbar_component_1 = require('./progressbar/progressbar.component');
var subject_item_component_1 = require('./subject-item/subject-item.component');
var reward_history_component_1 = require('./reward-history/reward-history.component');
var targets_component_1 = require('./targets/targets.component');
exports.MODULE_ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'subjects', component: subjects_component_1.SubjectsComponent },
    { path: 'goals', component: goals_component_1.GoalsComponent },
    { path: 'rewards', component: rewards_component_1.RewardsComponent },
    { path: 'settings', component: settings_component_1.SettingsComponent },
    { path: 'other', component: other_component_1.OtherComponent },
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    subjects_component_1.SubjectsComponent,
    goals_component_1.GoalsComponent,
    rewards_component_1.RewardsComponent,
    settings_component_1.SettingsComponent,
    other_component_1.OtherComponent,
    progressbar_component_1.ProgressbarComponent,
    subject_item_component_1.SubjectItemComponent,
    reward_history_component_1.RewardHistoryComponent,
    targets_component_1.TargetsComponent
];
//# sourceMappingURL=dashboard.routes.js.map