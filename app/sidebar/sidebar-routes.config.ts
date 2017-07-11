import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  { path: 'home', title: 'Home', menuType: MenuType.LEFT, icon: 'material-icons'},
  { path: 'subjects', title: 'Subjects', menuType: MenuType.LEFT, icon: 'material-icons'},
  { path: 'settings', title: 'Profile Settings', menuType: MenuType.LEFT, icon: 'material-icons'},
  { path: 'goals', title: 'Set / check Goals', menuType: MenuType.LEFT, icon: 'material-icons'},
  { path: 'rewards', title: 'Rewards', menuType: MenuType.LEFT, icon: 'material-icons'},
  { path: 'other', title: 'Other', menuType: MenuType.LEFT, icon: 'material-icons'},
]
