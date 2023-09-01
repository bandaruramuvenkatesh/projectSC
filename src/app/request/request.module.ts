import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AddEditRequestComponent } from './components/add-edit-request/add-edit-request.component';
import { RequestListComponent } from './components/request-list/request-list.component';

@NgModule({
  declarations: [AddEditRequestComponent, RequestListComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [AddEditRequestComponent, RequestListComponent],
})
export class RequestModule {}
