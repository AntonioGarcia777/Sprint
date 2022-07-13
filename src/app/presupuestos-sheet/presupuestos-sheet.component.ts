import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { PanelPreciosService } from '../panel-precios.service';

@Component({
  selector: 'app-presupuestos-sheet',
  templateUrl: './presupuestos-sheet.component.html',
  styleUrls: ['./presupuestos-sheet.component.css']
})
export class PresupuestosSheetComponent implements OnInit {
  form: FormGroup;
  total: number;
  priceOfPage: number;
  priceOfPages: number;
  priceOfLanguage: number;
  pageCount: number;
  languageCount: number;
  openPanel: boolean;
  
  servicios: Array<any> = [
    { name: 'Una página web (500 €)', value: 500 },
    { name: 'Una consultoria SEO (300 €)', value: 300 },
    { name: 'Una campaña de Google Ads (200 €)', value: 200 },    
  ];

  constructor(fb: FormBuilder, private priceProviderService:PanelPreciosService) {
    this.form = fb.group({
      selectedServices:  new FormArray([]),          
     });

    this.total = 0;
    this.priceOfPage = 0;
    this.priceOfPages = 0;
    this.priceOfLanguage = 0;
    this.pageCount = 0;
    this.languageCount = 0;
    this.openPanel = false; 
  }

  onCheckboxChange(value: number, event: any) {            
    const selectedServices = (this.form.controls['selectedServices'] as FormArray);           
    if (event.checked) {      
      selectedServices.push(new FormControl(value));      
      this.total = selectedServices.controls
      .map(control => control.value)
      .reduce((prev, curr) => prev + curr, 0);                
      console.log(this.total)               
    } 
    else {
      const index = selectedServices.controls
      .findIndex(x => x.value === value);
      selectedServices.removeAt(index);
      this.total = selectedServices.controls
      .map(control => control.value)
      .reduce((prev, curr) => prev + curr, 0);
      console.log(this.total);    
    }       
    if (event.checked) {
      const index = selectedServices.controls
      .findIndex(control => control.value == 500);
      this.openPanel = true;
    } else this.openPanel = false
    console.log(this.form.value);      
  }  

  ngOnInit(): void {
    this.priceProviderService.precioDePaginas.subscribe(Number => {console.log('Recibiendo data...', Number); 
    const index = 0
    const key = Object.keys(Number)[index] as keyof typeof Number;
    const price = Number[key]
    this.priceOfPage = parseInt(price)})

    this.priceProviderService.precioDeIdiomas.subscribe(data => {console.log('Recibiendo data...', data); 
    const index = 0
    const key = Object.keys(data)[index] as keyof typeof data;
    const priceLanguage = data[key]
    this.priceOfLanguage = parseInt(priceLanguage)});
  }
}
