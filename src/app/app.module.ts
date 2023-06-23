import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';

import { SectionCategoryComponent } from './components/template/section-category/section-category.component';
import { SectionProductsComponent } from './components/template/section-products/section-products.component';
import { SectionSocialMediaComponent } from './components/template/section-social-media/section-social-media.component';
import { SectionNewsletterComponent } from './components/template/section-newsletter/section-newsletter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrosselComponent } from './components/template/carrossel/carrossel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionCategoryComponent,
    SectionProductsComponent,
    SectionSocialMediaComponent,
    SectionNewsletterComponent,
    CarrosselComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
