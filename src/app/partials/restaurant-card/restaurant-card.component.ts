import {Component, Input, OnInit} from '@angular/core';
import {CommonService} from '../../services/common.service';
import {RestaurantMock} from '../../services/Restaurant-mock';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent implements OnInit {
  @Input() restaurant: any = null;
  // getRestaurant$ = RestaurantMock;
  getRestaurant$: any = { success: true };
  openUrl = RestaurantCardComponent.openUrl;

  static openUrl(url) {
    window.open(url);
  }

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.getRestaurant$ = this.service.getRestaurant(this.restaurant.establishment.id);
  }

}
