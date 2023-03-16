import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPunetorComponent } from './new-punetor.component';

describe('NewPunetorComponent', () => {
  let component: NewPunetorComponent;
  let fixture: ComponentFixture<NewPunetorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPunetorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPunetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
