import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityValuesComponent } from './security-values.component';

describe('SecurityValuesComponent', () => {
  let component: SecurityValuesComponent;
  let fixture: ComponentFixture<SecurityValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
