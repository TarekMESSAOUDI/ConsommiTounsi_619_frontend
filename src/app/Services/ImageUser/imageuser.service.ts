import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ImageUser } from '../../Models/ImageUser';

@Injectable({
  providedIn: 'root'
})
export class ImageuserService {

  uploadImageURL = "http://localhost:9091/SpringMVC/servlet/uploaded";
  affectImageToClientURL = "http://localhost:9091/SpringMVC/servlet/affect-image-to-user";
  retreiveAllImageURL = "http://localhost:9091/SpringMVC/servlet/retreive-all-image";

  constructor(private imagehttp: HttpClient, private router: Router) { }

  uploadImage(image: ImageUser): Observable<any> {
    return this.imagehttp.post(this.uploadImageURL, image);
  }

  affectImageToClient(image: ImageUser): Observable<any> {
    return this.imagehttp.post(this.affectImageToClientURL, image);
  }

  retreiveAllImage(): Observable<any> {
    return this.imagehttp.get(this.retreiveAllImageURL);
  }
}
