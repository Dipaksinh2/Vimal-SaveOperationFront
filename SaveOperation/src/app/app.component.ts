import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SaveOperation';
  dept: any;
  constructor(private userData: UserServiceService) {
    this.userData.getDept().subscribe((data) => {
      this.dept = data;
    });
  }
  getUserData(data: any) {
    const userDetail = {
      user_first_name: data.firstName,
      user_last_name: data.lastName,
      user_preferred_name: data.preferredName,
      user_pronounce: data.pronouns,
      user_work_email: data.email,
      user_phone_no: data.phoneNumber,
      user_fax: data.fax,
      user_department: data.department,
    };

    const addressData = {
      address_1: data.addressOne,
      address_2: data.addressTwo,
      address_city: data.city,
      address_province: data.province,
      address_country: data.country,
      address_zipcode: data.zipcode,
    };

    const managerData = {
      manager_first_name: data.managerFirstName,
      manager_last_name: data.managerLastName,
      manager_mail_id: data.managerMail,
    };

    const profileData = {
      linkedin: data.linkedin,
      facebook: data.facebook,
      others: data.Other,
    };

    this.userData.saveUser(userDetail).subscribe((res) => {
      console.log(res);
    });

    this.userData.saveAddress(addressData).subscribe((res) => {
      console.log(res);
    });

    this.userData.saveManager(managerData).subscribe((res) => {
      console.log(res);
    });

    this.userData.saveProfile(profileData).subscribe((res) => {
      console.log(res);
    });

    window.alert('All record saved successfully.');
  }
}
