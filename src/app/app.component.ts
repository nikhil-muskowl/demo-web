import { Component } from '@angular/core';
import { UserService } from "./services/account/user.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'demo';
  private isLogged = false;

  constructor(
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    if (this.userService.id) {
      this.isLogged = true;
    }
  }

}
