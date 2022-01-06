import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDesigComponent } from './create-desig.component';

describe('CreateDesigComponent', () => {
  let component: CreateDesigComponent;
  let fixture: ComponentFixture<CreateDesigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDesigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDesigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
