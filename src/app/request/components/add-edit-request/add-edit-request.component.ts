import { Component, Input } from '@angular/core';
import { RequestService } from '../../services/reqest.service';

@Component({
  selector: 'app-add-edit-request',
  templateUrl: './add-edit-request.component.html',
})
export class AddEditRequestComponent {
  @Input() request: any = {};

  @Input() isEdit: boolean = false;

  @Input() isUser: boolean = false;

  constructor(private service: RequestService) {}

  submit() {
    if (Object.keys(this.request).length > 6) {
      if (this.isEdit) {
        this.service.update(this.request).subscribe({
          error: (err: any) => console.log('error', err),
          next: (res: any) => {
            if (res.id) {
              alert('Request updated successfully');
            } else {
              alert('Request not updated');
            }
          },
          complete: () => console.log('complete'),
        });
      } else {
        this.request.employeeName = localStorage.getItem('userName');
        console.log("userName");
        this.request.employeeId = localStorage.getItem('userId');
        this.service.create(this.request).subscribe({
          error: (err: any) => console.log('error', err),
          next: (res: any) => {
            if (res.id) {
              alert('Request created successfully');
            } else {
              alert('Request not created');
            }
          },
          complete: () => console.log('complete'),
        });
      }
    } else {
      alert('Please fill all the fields before sumbmitting');
    }
  }
}
