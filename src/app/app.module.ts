import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';



import { SharedService } from './services/shared.service';


import { AppComponent } from './app.component';
import { MusicTrackComponent } from './components/music-track/music-track.component';
import { GenresComponent } from './components/genres/genres.component';



@NgModule({
  declarations: [
    AppComponent,
    MusicTrackComponent,
    GenresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
   
   
   RouterModule.forRoot([
    {
      path: '',
      component: MusicTrackComponent
    }

  ])
      
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
