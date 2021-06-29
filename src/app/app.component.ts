import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountryService } from './shared/services/country.service';
import { NeighbourService } from './shared/services/neighbour.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
countries!:any;
neighbours!:any;
myForm!:FormGroup;
  constructor(private countryService: CountryService,
              private neighbourService: NeighbourService,
              private fb: FormBuilder){
    this.myForm = fb.group({
      countries:''
    })
    countryService.getCountries$().subscribe(data => this.countries = data);

    this.myForm.get('countries')?.valueChanges
           .subscribe(code => this.neighbours = this.neighbourService.getNeighbours$(code))

    // this.countries = countryService.getCountries$();
  }

}
