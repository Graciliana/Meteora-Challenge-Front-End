import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSocialMediaComponent } from './section-social-media.component';

describe('SectionSocialMediaComponent', () => {
  let component: SectionSocialMediaComponent;
  let fixture: ComponentFixture<SectionSocialMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionSocialMediaComponent]
    });
    fixture = TestBed.createComponent(SectionSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
