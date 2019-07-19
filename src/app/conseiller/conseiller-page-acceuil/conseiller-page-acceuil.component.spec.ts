import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillerPageAcceuilComponent } from './conseiller-page-acceuil.component';

describe('ConseillerPageAcceuilComponent', () => {
  let component: ConseillerPageAcceuilComponent;
  let fixture: ComponentFixture<ConseillerPageAcceuilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseillerPageAcceuilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillerPageAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
