import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddGroupComponent } from './home/pages/add-group/add-group.component';
import { JoinGroupComponent } from './home/pages/join-group/join-group.component';
<<<<<<< HEAD
import { GroupDetailComponent } from './home/pages/group-detail/group-detail.component';
=======
>>>>>>> f09b42ac5aa7332baaedd0f1443aaca8f8651fc1
import { AddTaskComponent } from './home/pages/add-task/add-task.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
<<<<<<< HEAD
  { path: 'add-grp', component: AddGroupComponent },
  { path: 'add-task', component: AddTaskComponent  },
  { path: 'join-grp', component: JoinGroupComponent },
  { path: 'group-detail', component: GroupDetailComponent },
=======
  { path: 'add-group' , component:AddGroupComponent},
  { path: 'join-group' , component:JoinGroupComponent},
  { path: 'add-task' , component:AddTaskComponent},
>>>>>>> f09b42ac5aa7332baaedd0f1443aaca8f8651fc1
];