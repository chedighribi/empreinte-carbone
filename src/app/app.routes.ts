import { Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {SummaryComponent} from "./features/summary/summary.component";
import {ProfileComponent} from "./shared/components/profile/profile.component";
import {userGuard} from "./guards/user.guard";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'summary', component: SummaryComponent, canActivate: [userGuard] },
  { path: 'profile/:username', component: ProfileComponent, canActivate: [userGuard] },
];
