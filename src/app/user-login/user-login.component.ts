import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core/core.service'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userLogin: object;
  login(): void {
    this.http.login(this.userLogin)
      .subscribe(res => {
        console.log('you are successfully logd in');
      })
  }
  constructor(private http: CoreService) { }

  ngOnInit() {
    this.userLogin = {};
  }

}
