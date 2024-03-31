import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SearchComponent } from '../../partials/search/search.component';
import { CityService } from '../../../services/city.service';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [RouterModule, SearchComponent],
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css', './swiper-bundle.min.css']
})
export class CityComponent {
  city : any = {}
  constructor(private cityService: CityService, private router: Router, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {
      if(params["id"]){
        this.city = cityService.getCityById(params["id"])
      }
    })
  }
}
