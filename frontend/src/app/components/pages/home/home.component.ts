import { Component } from '@angular/core';
import { City } from '../../../shared/models/City';
import { CityService } from '../../../services/city.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cities: City[] = [];
  constructor(private cityService:CityService) {
    this.cities = cityService.getAll();
  }

}
