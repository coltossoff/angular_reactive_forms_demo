import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityCompensationCodesService {

  codes: string[];
  constructor() { 
    this.codes = [
      'Funeral (FNRPAY)',
      'Some Code (SMECDE)',
      'Another Code (ANTHRCDE)',
      'Yet Another Code (YTANTHRCDE)'
    ]
  }
}
