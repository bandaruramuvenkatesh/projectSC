import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { UiCreateRequestComponent } from './components/ui-create-request/ui-create-request.component';
import { UiHomeComponent } from './components/ui-home/ui-home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

const routes: Routes = [
  { path: '', component: UiHomeComponent },
  { path: 'create', component: UiCreateRequestComponent },
  { path: 'user', component: UserHomeComponent },
  { path: 'admin', component: AdminHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiRoutingModule {}
