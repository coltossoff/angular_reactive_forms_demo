import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompensationTypeService {

  types: string[];
  constructor() { 
    this.types = [
      'Earning',
      'Some Type',
      'Another Type',
      'Yet Another Type'
    ]
  }
}
