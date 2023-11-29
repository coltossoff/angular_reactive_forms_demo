import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  names: string[];
  constructor() { 
    this.names = [
      'Colt',
      'Caleb',
      'Tim',
      'Tommy',
      'Bill',
      'Ray',
      'Sameer'
    ]
  }
}
