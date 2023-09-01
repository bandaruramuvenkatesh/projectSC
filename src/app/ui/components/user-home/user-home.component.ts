import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request/services/reqest.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
})
export class UserHomeComponent implements OnInit {
  requests: any[] = [];
  isEdit: boolean = false;
  userName: string = '';

  request: any = {};

  constructor(private service: RequestService) {}

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName') || '';
    this.getRequests();
  }

  getRequests() {
    this.service.list().subscribe({
      next: (data: any) => {
        if (data.length > 0) {
          // this.requests = data;
          console.log('data', data);
          this.requests = data.filter(
            (request: any) => request.employeeName === this.userName
          );
        }
      },
      error: (err: any) => console.log(err),
      complete: () => console.log('done getting data'),
    });
  }
}
