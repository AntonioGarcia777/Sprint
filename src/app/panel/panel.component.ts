import { Component, OnInit, Input } from '@angular/core';
import { PanelPreciosService } from '../panel-precios.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent implements OnInit { 

  @Input () totalDeHome: number;
  
  pageQty = { name: 'Qty'};   
  pageCount: number;
  languageCount: number;
  priceOfPage: number;
  priceOfLanguage: number;   

  constructor(private priceProviderService:PanelPreciosService) {
    this.pageCount = 0;
    this.languageCount = 0;
    this.priceOfPage = 0;
    this.priceOfLanguage = 0;          
  }  

  getValueOfPages(event: Event): any {        
    const page = (event.target as HTMLInputElement).value;    
    this.priceOfPage = 30 * parseInt(page);    
    /*console.log(this.priceOfPage);*/
    this.priceProviderService.precioDePaginas.emit({Number:this.priceOfPage})          
  }

  getValueOfLanguages(event: Event): any {        
    const language = (event.target as HTMLInputElement).value;    
    this.priceOfLanguage = 30 * parseInt(language);
    /*console.log(this.priceOfLanguage);*/
    this.priceProviderService.precioDeIdiomas.emit({data:this.priceOfLanguage})      
  }

  ngOnInit(): void {
  }

  addPage(){
    this.pageCount = this.pageCount +1;
    this.priceOfPage = 30 * this.pageCount;
    /*console.log(this.priceOfPage);*/
    this.priceProviderService.precioDePaginas.emit({Number:this.priceOfPage})
  }

  restPage(){
    this.pageCount = this.pageCount - 1;
    this.priceOfPage = 30 * this.pageCount;
    if (this.pageCount <= 0){
      this.pageCount = 0;
      this.priceOfPage = 0;
    }    
    this.priceProviderService.precioDePaginas.emit({Number:this.priceOfPage})
  }

  addLanguage(){
    this.languageCount = this.languageCount +1;
    this.priceOfLanguage = 30 * this.languageCount;   
    this.priceProviderService.precioDeIdiomas.emit({data:this.priceOfLanguage})
  }

  restLanguage(){
    this.languageCount = this.languageCount - 1;
    this.priceOfLanguage = 30 * this.languageCount;
    if (this.languageCount <= 0){
      this.languageCount = 0;
      this.priceOfLanguage = 0;
    }    
    this.priceProviderService.precioDeIdiomas.emit({data:this.priceOfLanguage})
  }  
}