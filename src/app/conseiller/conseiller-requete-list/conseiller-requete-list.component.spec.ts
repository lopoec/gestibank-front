import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillerRequeteListComponent } from './conseiller-requete-list.component';

describe('ConseillerRequeteListComponent', () => {
  let component: ConseillerRequeteListComponent;
  let fixture: ComponentFixture<ConseillerRequeteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseillerRequeteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillerRequeteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
