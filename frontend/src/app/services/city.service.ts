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
}
