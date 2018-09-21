import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  userRegistration: object;

  register(): void {
    this.http.regsiter(this.userRegistration)
      .subscribe(res => {
        alert(res.status);
        this.userRegistration = {};
      })
  }

  constructor(private http: CoreService) {
    this.userRegistration = {}

  }

  ngOnInit() {
  }

}
