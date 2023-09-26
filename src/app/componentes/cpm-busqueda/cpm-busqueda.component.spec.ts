import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpmBusquedaComponent } from './cpm-busqueda.component';

describe('CpmBusquedaComponent', () => {
  let component: CpmBusquedaComponent;
  let fixture: ComponentFixture<CpmBusquedaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpmBusquedaComponent]
    });
    fixture = TestBed.createComponent(CpmBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
