import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillerConnectComponent } from './conseiller-connect.component';

describe('ConseillerConnectComponent', () => {
  let component: ConseillerConnectComponent;
  let fixture: ComponentFixture<ConseillerConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseillerConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillerConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
