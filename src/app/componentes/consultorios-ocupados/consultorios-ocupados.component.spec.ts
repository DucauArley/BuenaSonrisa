import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultoriosOcupadosComponent } from './consultorios-ocupados.component';

describe('ConsultoriosOcupadosComponent', () => {
  let component: ConsultoriosOcupadosComponent;
  let fixture: ComponentFixture<ConsultoriosOcupadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultoriosOcupadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultoriosOcupadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
