import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { PageNotFoundComponent } from './content/page-not-found/page-not-found.component';
import { AboutComponent } from './content/about/about.component';
import { HomeComponent } from './content/home/home.component';
import { GalleryComponent } from './content/gallery/gallery.component';
import { ContactsComponent } from './content/contacts/contacts.component';

const routs: Routes = [
    {path:'', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'gallery', component: GalleryComponent},
    {path:'contacts', component: ContactsComponent},
    {path:'**', component: PageNotFoundComponent}
]

@NgModule({
    declarations:[],
    imports:[
        CommonModule,
        RouterModule.forRoot(routs)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}