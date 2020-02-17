import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  restaurants = [];

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.service.getRestaurants().subscribe(res => {
      this.restaurants = res;
    });
  }

}
