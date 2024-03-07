import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent {

  public myForm: FormGroup = this.fb.group({
    region : ['', Validators.required],
    contry : ['', Validators.required],
    borders : ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private contriesServices: CountriesService,){}



    get regions(): Region[]{
      return this.contriesServices.regions
    }


}
