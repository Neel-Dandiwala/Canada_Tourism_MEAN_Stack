import { Injectable } from '@angular/core';
import { City } from '../shared/models/City';
import { sample_cities } from '../../data';

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
}
