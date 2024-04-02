import { Injectable } from '@angular/core';
import { City } from '../shared/models/City';
import { CityDetail } from '../shared/models/CityDetail';
import { sample_cities } from '../../data/home_city_data';
import { city_details } from '../../data/city_detail';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  getAll():City[] {
    return sample_cities;
  }

  getAllCitiesBySearchTerm(searchTerm:string):City[] {
    return this.getAll().filter(city => {
      {
        const lowercaseSearchTerm = searchTerm.toLowerCase();
        return city.tags.some(tag => tag.toLowerCase().includes(lowercaseSearchTerm)) ||
               city.name.toLowerCase().includes(lowercaseSearchTerm);
      }
    });
  }

  getCityById(id:string): any {
    return city_details.find({ "id": id})
  }

  
}
