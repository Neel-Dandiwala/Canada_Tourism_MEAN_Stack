import { Component } from '@angular/core';
import { City } from '../../../shared/models/City';
import { CityService } from '../../../services/city.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SearchComponent } from '../../partials/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cities: City[] = [];
  constructor(private cityService:CityService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params['searchTerm']){
        this.cities = this.cityService.getAllCitiesBySearchTerm(params['searchTerm']);
      }else{
        this.cities = cityService.getAll();
      }
    })
  }

}
