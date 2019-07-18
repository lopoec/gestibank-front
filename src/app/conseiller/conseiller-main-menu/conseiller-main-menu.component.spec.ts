import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillerMainMenuComponent } from './conseiller-main-menu.component';

describe('ConseillerMainMenuComponent', () => {
  let component: ConseillerMainMenuComponent;
  let fixture: ComponentFixture<ConseillerMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseillerMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillerMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
