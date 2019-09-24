import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './content/page-not-found/page-not-found.component';
import { AboutComponent } from './content/about/about.component';
import { HomeComponent } from './content/home/home.component';
import { GalleryComponent } from './content/gallery/gallery.component';
import { ContactsComponent } from './content/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PageNotFoundComponent,
    AboutComponent,
    HomeComponent,
    GalleryComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
