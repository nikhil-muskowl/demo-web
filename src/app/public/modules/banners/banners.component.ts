import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../../services/banner/banner.service';
import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {
  public responseData;
  public banners;
 
  public SwiperConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: true
  };



  constructor(
    private bannerService: BannerService
  ) {

    
  }

  ngOnInit() {
    this.getList();
  }

  private getList() {
    this.bannerService.list().subscribe(
      response => {
        this.responseData = response;
        this.banners = this.responseData.data;
        // console.log(this.banners);
      }
    );
  }

}
