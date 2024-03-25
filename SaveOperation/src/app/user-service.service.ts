import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  urlToSaveManager = 'http://localhost:3000/api/manager/saveManager';
  urlToSaveUsers = 'http://localhost:3000/api/users/saveUser';
  urlToSaveProfile = 'http://localhost:3000/api/profile/saveProfile';
  urlToSaveAddress = 'http://localhost:3000/api/address/saveAddress';
  urlToGetDepartment = 'http://localhost:3000/api/department/getDept';

  constructor(private http: HttpClient) {}

  getDept() {
    return this.http.get(this.urlToGetDepartment);
  }

  saveManager(data: any) {
    return this.http.post(this.urlToSaveManager, data);
  }

  saveProfile(data: any) {
    return this.http.post(this.urlToSaveProfile, data);
  }

  saveAddress(data: any) {
    return this.http.post(this.urlToSaveAddress, data);
  }

  saveUser(data: any) {
    return this.http.post(this.urlToSaveUsers, data);
  }
}
