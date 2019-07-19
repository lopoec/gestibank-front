import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDemandeouvertureListComponent } from './admin-demandeouverture-list.component';

describe('AdminDemandeouvertureListComponent', () => {
  let component: AdminDemandeouvertureListComponent;
  let fixture: ComponentFixture<AdminDemandeouvertureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDemandeouvertureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDemandeouvertureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
