import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { UiHomeComponent } from './components/ui-home/ui-home.component';
import { UiCreateRequestComponent } from './components/ui-create-request/ui-create-request.component';
import { RequestModule } from '../request/request.module';
import { FormsModule } from '@angular/forms';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

@NgModule({
  declarations: [NavComponent, UiHomeComponent, UiCreateRequestComponent, UserHomeComponent, AdminHomeComponent],
  imports: [CommonModule, UiRoutingModule,RequestModule,FormsModule],
  exports: [NavComponent],
})
export class UiModule {}
