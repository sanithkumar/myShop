import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

export const config = {
    baseUrl : "http://localhost:3000/", // API URL
    baseImgPath : "http://localhost:4200/src/assets/images/",
    requestHeaders: this.httpOptions,
}