import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillerInfoComponent } from './conseiller-info.component';

describe('ConseillerInfoComponent', () => {
  let component: ConseillerInfoComponent;
  let fixture: ComponentFixture<ConseillerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseillerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
