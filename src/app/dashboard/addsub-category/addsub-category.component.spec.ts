import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubCategoryComponent } from './addsub-category.component';

describe('AddsubCategoryComponent', () => {
  let component: AddsubCategoryComponent;
  let fixture: ComponentFixture<AddsubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddsubCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
