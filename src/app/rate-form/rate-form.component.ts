import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-rate-form',
  templateUrl: './rate-form.component.html',
  styleUrls: ['./rate-form.component.css']
})
export class RateFormComponent implements OnInit {

  @Input() parentForm: FormGroup;

  rate = 15.0000

  constructor() { }

  ngOnInit() {
    this.parentForm.get('amount').setValue((this.rate *  this.parentForm.get('units').value).toFixed(4));

    this.parentForm.get('units').valueChanges.subscribe(value => {
      if (this.parentForm.get('amount').value !== (this.rate * value).toFixed(4)) {
        this.parentForm.get('amount').setValue((this.rate * value).toFixed(4));
      }
    });

    this.parentForm.get('amount').valueChanges.subscribe(value => {
      if (this.parentForm.get('units').value !== (value / this.rate).toFixed(4)) {
        this.parentForm.get('units').setValue((value / this.rate).toFixed(4));
      }
    });
  }

}
