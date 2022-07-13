import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PanelComponent } from './panel/panel.component';
import { PanelPreciosService } from './panel-precios.service';
import { PresupuestosSheetComponent } from './presupuestos-sheet/presupuestos-sheet.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes:Routes=[  
  {path:'home', component: HomeComponent },
  {path:'presupuestos', component: PresupuestosSheetComponent}  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelComponent,
    PresupuestosSheetComponent
  ],
  imports: [
    BrowserModule,
    /*AppRoutingModule,*/
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PanelPreciosService],
  bootstrap: [AppComponent],   
})
export class AppModule { }
