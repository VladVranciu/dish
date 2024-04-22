import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketRightPanelComponent } from './basket-right-panel.component';

describe('BasketRightPanelComponent', () => {
  let component: BasketRightPanelComponent;
  let fixture: ComponentFixture<BasketRightPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketRightPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasketRightPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
