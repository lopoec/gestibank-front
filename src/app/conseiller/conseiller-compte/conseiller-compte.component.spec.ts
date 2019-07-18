import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillerCompteComponent } from './conseiller-compte.component';

describe('ConseillerCompteComponent', () => {
  let component: ConseillerCompteComponent;
  let fixture: ComponentFixture<ConseillerCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseillerCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillerCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
