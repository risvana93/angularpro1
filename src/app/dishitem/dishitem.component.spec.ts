import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishitemComponent } from './dishitem.component';

describe('DishitemComponent', () => {
  let component: DishitemComponent;
  let fixture: ComponentFixture<DishitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
