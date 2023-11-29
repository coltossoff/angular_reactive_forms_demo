import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { NamesService } from '../shared/names.service';
import { CompensationTypeService } from '../shared/compensation-type.service';
import { Observable, of } from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';
import { Logs } from 'selenium-webdriver';
import { ActivityCompensationCodesService } from '../activity-compensation-codes.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  master = new FormGroup({
    forms: new FormArray([])
  })

  filteredOptions = [];

  constructor(
    private names: NamesService, 
    private compensationTypes: CompensationTypeService,
    private activityCompCodes: ActivityCompensationCodesService
  ) { }

  ngOnInit() {
    this.addToArray();  
    this.master.valueChanges.subscribe(value => console.log(value));  
  }

  addToArray(){
    let dummy = this.master.get('forms') as FormArray;
    dummy.push(this.addForm());
  }

  addForm(): FormGroup {
    let formGroup = new FormGroup({
      name: new FormControl(''),
      activityDate: new FormControl(new Date()),
      compensationType: new FormControl(''),
      activityCompCode: new FormControl(''),
      amount: new FormControl(0.0000),
      units: new FormControl(1.0000)
    });

    let filterStrings = this.names.names;
    this.filteredOptions.push(filterStrings);
    
    formGroup.get('name').valueChanges.subscribe(value => {      
      this.setFilteredOptions(value, filterStrings)
    });

    return formGroup;
  }

  setFilteredOptions(value: string, filterStrings: string[]) {
    let index = this.filteredOptions.indexOf(filterStrings);
    this.filteredOptions.splice(index, 1, this._filter(value));
  }

  private _filter(value: string): string[] {
    return this.names.names.filter(name => name.toLowerCase()
      .substr(0, value.length)
      .includes(value.toLowerCase())
    );
  }
}
