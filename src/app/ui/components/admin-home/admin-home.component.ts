import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request/services/reqest.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
})
export class AdminHomeComponent implements OnInit {
  requests: any = [];
  isEdit: boolean = false;

  request: any = {};

  constructor(private service: RequestService) {}

  ngOnInit(): void {
    // calling get requests method for getting the data
    this.getRequests();
  }

  getRequests() {
    this.service.list().subscribe({
      error: (err: any) => console.log('error', err),
      next: (res: any) => {
        if (res.length > 0) {
          this.requests = res;
          // sorting the requests by id
          this.requests.sort((a: any, b: any) => {
            return a.id - b.id;
          });
        } else {
          console.log('There is no requests');
        }
      },
      complete: () => console.log('complete'),
    });
  }
}
