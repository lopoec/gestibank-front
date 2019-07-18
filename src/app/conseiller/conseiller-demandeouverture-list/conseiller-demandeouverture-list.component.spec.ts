import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillerDemandeouvertureListComponent } from './conseiller-demandeouverture-list.component';

describe('ConseillerDemandeouvertureListComponent', () => {
  let component: ConseillerDemandeouvertureListComponent;
  let fixture: ComponentFixture<ConseillerDemandeouvertureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseillerDemandeouvertureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillerDemandeouvertureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
