import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/account/user.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  private heading = 'My Account';
  private responseData;
  private name;
  private email;
  private contact;
  private image;
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.userService.id) {
      this.userService.getDetails(this.userService.id).subscribe(response => {
        this.responseData = response;
        this.name = this.responseData.result.name;
        this.email = this.responseData.result.email;
        this.contact = this.responseData.result.contact;
        this.image = this.responseData.result.image_thumb;
      });
    } else {
      this.router.navigate(['/login']);
    }

  }

}
