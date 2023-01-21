import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { GitHubSPAComponent } from 'src/components/git-hub-spa/git-hub-spa.component';

@NgModule({
    declarations: [
        AppComponent,
        GitHubSPAComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
     
    ]
})
export class AppModule { }
