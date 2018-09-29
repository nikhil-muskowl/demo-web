import { Component, OnInit } from '@angular/core';
import { ConfigService } from "../../services/config.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public configService: ConfigService) {

  }

  ngOnInit() {
  }

}
