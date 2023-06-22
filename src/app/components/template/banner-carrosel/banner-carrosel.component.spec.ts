import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCarroselComponent } from './banner-carrosel.component';

describe('BannerCarroselComponent', () => {
  let component: BannerCarroselComponent;
  let fixture: ComponentFixture<BannerCarroselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerCarroselComponent]
    });
    fixture = TestBed.createComponent(BannerCarroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
