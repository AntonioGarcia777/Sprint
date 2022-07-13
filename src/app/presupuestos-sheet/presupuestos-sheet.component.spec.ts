import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestosSheetComponent } from './presupuestos-sheet.component';

describe('PresupuestosSheetComponent', () => {
  let component: PresupuestosSheetComponent;
  let fixture: ComponentFixture<PresupuestosSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresupuestosSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresupuestosSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
