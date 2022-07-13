import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PanelPreciosService {   
  @Output() precioDePaginas: EventEmitter<any> = new EventEmitter();
  @Output() precioDeIdiomas: EventEmitter<any> = new EventEmitter();
  constructor() {        
  }  
}
