import { Component, OnInit } from '@angular/core';
import { ConfigService } from "../../services/config.service";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public configService: ConfigService,
    private spinner: NgxSpinnerService
  ) {

  }

  ngOnInit() {
    // this.spinner.show();

    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 1000);
  }

  

}
