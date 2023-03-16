import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPunonjesComponent } from './admin-punonjes.component';

describe('AdminPunonjesComponent', () => {
  let component: AdminPunonjesComponent;
  let fixture: ComponentFixture<AdminPunonjesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPunonjesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPunonjesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
