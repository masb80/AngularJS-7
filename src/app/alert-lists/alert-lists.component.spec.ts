import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertListsComponent } from './alert-lists.component';

describe('AlertListsComponent', () => {
  let component: AlertListsComponent;
  let fixture: ComponentFixture<AlertListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
