import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCategoryComponent } from './section-category.component';

describe('SectionCategoryComponent', () => {
  let component: SectionCategoryComponent;
  let fixture: ComponentFixture<SectionCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionCategoryComponent]
    });
    fixture = TestBed.createComponent(SectionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
