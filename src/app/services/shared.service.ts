import { Injectable } from '@angular/core';
import { Http, Response ,Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';



declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public apiUrl = 'http://localhost/music-backend';

  headers: Headers;
  options: RequestOptions;

  constructor(public http: Http) { 

    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  addGenresData(body: Object): Promise<Object> {
    return this.http.post(this.apiUrl + '/api/genre/add', body, this.options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  showGenresData(): Promise<Object> {
    return this.http.get(this.apiUrl + '/api/genres', this.options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  } 

  editGenresData(body: Object): Promise<Object> {
   
    return this.http.put(this.apiUrl + '/api/genres/edit', body, this.options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

 deleteGenresData(body: Object): Promise<Object> {
    return this.http.post(this.apiUrl + '/api/genres/delete', body, this.options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

 //tracks api's call

  showTracksData(): Promise<Object> {
    return this.http.get(this.apiUrl + '/api/tracks', this.options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  } 

  addTrackData(body: Object): Promise<Object> {
    return this.http.post(this.apiUrl + '/api/track/add', body, this.options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }  

  editTrackData(body: Object): Promise<Object> {
    return this.http.put(this.apiUrl + '/api/tracks/edit', body, this.options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  deleteTrackData(body: Object): Promise<Object> {
    return this.http.post(this.apiUrl + '/api/track/delete', body, this.options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }



   private extractData(res: Response) {
    let body = res.json();
     console.log("below is the extracted data");
     console.log(body);
    return body || {};
  }

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

}
