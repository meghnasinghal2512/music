import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared.service';

declare var $: any;

@Component({
  selector: 'app-music-track',
  templateUrl: './music-track.component.html',
  styleUrls: ['./music-track.component.css']
})
export class MusicTrackComponent implements OnInit {

  public tracks:any = {};
  public trackData:any = {};
  public trackId;
  public selectedGenres = '';
  public genresTracks:any = {};

  public p = 1;

  constructor(public sharedService : SharedService) { 

      this.showTracks();
       this.showGenres();

      
  }

  ngOnInit() {
  }

  showTrackModal() {
        $('#addTrackModal').modal('show');
  }

  addTrack(formData) {
  console.log(formData.value);
   
   this.sharedService.addTrackData(formData.value).then(res => {
          console.log(res);
          formData.reset();
          $('#addTrackModal').modal('hide');
          this.showGenres();
          this.showTracks();

          //this.toaster.success('Added successfully!');
          //this.toaster.success('We have sent an email. Please check your inbox!', 'Success!');
      }).catch(error => {
          console.log(error._body);
      });
  }

   showGenres() {
       this.sharedService.showGenresData().then(res => {
            this.genresTracks = res;
            this.genresTracks = this.genresTracks.genres;
          
        }).catch(error => {
            console.log(error._body);
        });
  }

  showTracks() {
       this.sharedService.showTracksData().then(res => {
            
            this.tracks = res;
            this.tracks = this.tracks.track;
            //this.toaster.success('Added successfully!');
            //this.toaster.success('We have sent an email. Please check your inbox!', 'Success!');
        }).catch(error => {
            console.log(error._body);
        });
  }

 // editTrackModal(formData) {
     // this.trackData = formData;
     // console.log( this.trackData);
     //   $('#editTrackModal').modal('show');
   // }

 // editTrack(formData) {
   //    console.log(formData);
   //    this.selectedGenres = formData.name;
    
  //}


  confirmDeleteTrack(data) {
     this.trackId = data;
       $('#confirmTrackModal').modal({
              backdrop: 'static'
       });          
    }


    deleteTrack() {
     let id = this.trackId;
     this.sharedService.deleteTrackData(id).then(res => {
         this.showTracks();

      }).catch(error => {
          console.log("error value: " + error);
      });
    }



}
