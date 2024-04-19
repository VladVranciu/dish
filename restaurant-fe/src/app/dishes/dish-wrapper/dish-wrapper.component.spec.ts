import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishWrapperComponent } from './dish-wrapper.component';

describe('DishWrapperComponent', () => {
  let component: DishWrapperComponent;
  let fixture: ComponentFixture<DishWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DishWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
