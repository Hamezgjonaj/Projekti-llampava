import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProduktetComponent } from './admin-produktet.component';

describe('AdminProduktetComponent', () => {
  let component: AdminProduktetComponent;
  let fixture: ComponentFixture<AdminProduktetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProduktetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProduktetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
