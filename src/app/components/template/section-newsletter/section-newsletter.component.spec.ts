import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNewsletterComponent } from './section-newsletter.component';

describe('SectionNewsletterComponent', () => {
  let component: SectionNewsletterComponent;
  let fixture: ComponentFixture<SectionNewsletterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionNewsletterComponent]
    });
    fixture = TestBed.createComponent(SectionNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
