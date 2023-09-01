import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ui-home',
  templateUrl: './ui-home.component.html',
})
export class UiHomeComponent {
  msg: string = '';

  email: string = '';
  password: string = '';

  private USERS: any = [
    {
      name: 'Ram',
      employeeId: '123456',
      password: 'wipro@123',
    },
    {
      name: 'Sam',
      employeeId: '654321',
      password: 'wipro@456',
    },
  ];

  constructor(private router: Router) {
    localStorage.clear();
  }

  login(): void {
    if (this.email === 'admin' && this.password === 'admin@123') {
      this.router.navigate(['/admin']);
    } else {
      const user = this.USERS.find((user: any) => {
        return (
          user.employeeId === this.email && user.password === this.password
        );
      });

      if (user) {
        localStorage.setItem('userName', user.name);
        localStorage.setItem('userId', user.employeeId);
        this.router.navigate(['/user']);
      } else {
        this.msg = 'Invalid credentials';

        setTimeout(() => {
          this.msg = '';
        }, 3000);
      }
    }
  }
}
