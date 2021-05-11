import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicity } from 'src/app/Models/Publicity';

@Injectable({
  providedIn: 'root'
})
export class PublicityService {
  getAllPublicitiesUrl = "http://localhost:9091/SpringMVC/servlet/show-all-publicities";
  addPublicitylUrl = "http://localhost:9091/SpringMVC/servlet/add-publicity";
  updatePublicityUrl = "http://localhost:9091/SpringMVC/servlet/update-publicity/";
  deletePublicityUrl = "http://localhost:9091/SpringMVC/servlet/remove-publicity/";
  assignImageToPublicityUrl="http://localhost:9091/SpringMVC/servlet/affect-image-to-publicity/";
  getPublicityByIdUrl = "http://localhost:9091/SpringMVC/servlet/get-by-id-publicity/";
  getPublicitiesByNameurl = "http://localhost:9091/SpringMVC/servlet/get-by-Name-all-publicities-by-name/";

  postPubImageurl="http://localhost:9091/SpringMVC/servlet/PostPubImage";
  GetAllPubsIamegsUrl= "http://localhost:9091/SpringMVC/servlet/GETALLPublicitiesImages";
  GetOnePubImageUrl= "http://localhost:9091/SpringMVC/servlet/publ/";
  constructor(private httpPublicity: HttpClient) { }

  getAllPublicities() {
    return this.httpPublicity.get<Publicity[]>(this.getAllPublicitiesUrl)
  }

  addPublicity(publicity: Publicity) {
    return this.httpPublicity.post<Publicity>(this.addPublicitylUrl, publicity);
  }
  updatePublicity(id: number,publicity: Publicity) {
    return this.httpPublicity.put<Publicity>(this.updatePublicityUrl+id, publicity);
  }

  deletePublicity(id: number) {
    return this.httpPublicity.delete(this.deletePublicityUrl + id);
  }

  assignImageToPublicity(idPublicity: number, idImage: number) {
    return this.httpPublicity.put(this.assignImageToPublicityUrl + idPublicity, idImage);
  }

  getPublicityById(publicityId: number) {
    return this.httpPublicity.get<Publicity>(this.getPublicityByIdUrl + publicityId);
  }

  getPublicitiesByName(namePublicity: string) {
    return this.httpPublicity.get<Publicity[]>(this.getPublicitiesByNameurl + namePublicity);
  }


  ////////////////////ImagePublicity//////////////

  getData(id: number): Observable<Object> {
    return this.httpPublicity.get(`${this.GetOnePubImageUrl}/${id}`);
  }

  getAll(): Observable<any> {

    return this.httpPublicity.get(`${this.GetAllPubsIamegsUrl}`);
  }

}
