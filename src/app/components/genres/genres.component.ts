import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router, RouterLinkActive } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared.service';

declare var $: any;

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  public genresTracks:any = {};
  public genData:any = {};
  public genresId;
  public p = 1;

  constructor(public sharedService : SharedService) { 

    this.showGenres();
  }

  ngOnInit() {
  }

  showGenresModal() {
        $('#addGenresModal').modal('show');
    }

  addGenres(formData) {
	     this.sharedService.addGenresData(formData.value).then(res => {
            formData.reset();
            $('#addGenresModal').modal('hide');
             this.showGenres();

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
             //console.log(this.genresTracks);

            //this.toaster.success('Added successfully!');
            //this.toaster.success('We have sent an email. Please check your inbox!', 'Success!');
        }).catch(error => {
            console.log(error._body);
        });
	}

	editGenresModal(formData) {
	    this.genData = formData;
        $('#editGenresModal').modal('show');
    }

    editGenres(formData) {
	     this.sharedService.editGenresData(formData).then(res => {
            
            $('#editGenresModal').modal('hide');
             this.showGenres();

           // this.toaster.success('Added successfully!');
            
        }).catch(error => {
            console.log(error._body);
            this.toaster.error('Error occured!');
        });
	  
	}

	confirmDelete(data) {
	   this.genresId = data;
	  // console.log(this.genresId);
          $('#confirmModal').modal({
              backdrop: 'static'
          });          
    }


    deleteGenres() {
     // console.log(this.genresId);
     let id = this.genresId;
	   this.sharedService.deleteGenresData(id).then(res => {
	       this.showGenres();

	    }).catch(error => {
	        console.log("error value: " + error);
	    });
    }




}
