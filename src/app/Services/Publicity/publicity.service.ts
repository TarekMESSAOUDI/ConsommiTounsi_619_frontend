import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publicity } from 'src/app/Models/Publicity';

@Injectable({
  providedIn: 'root'
})
export class PublicityService {
getAllPublicitiesUrl:"http://localhost:9091/SpringMVC/servlet/show-all-publicities";
addPublicitylUrl:"http://localhost:9091/SpringMVC/servlet/add-publicity";
updatePublicityUrl:"http://localhost:9091/SpringMVC/servlet/update-publicity";
deletePublicityUrl:"http://localhost:9091/SpringMVC/servlet/remove-publicity/";
assignImageToPublicityUrl:"http://localhost:9091/SpringMVC/servlet/affect-image-to-publicity/";
getPublicityByIdUrl:"http://localhost:9091/SpringMVC/servlet/get-by-id-publicity/";
getPublicitiesByNameurl:"http://localhost:9091/SpringMVC/servlet/get-by-Name-all-publicities-by-name/";

  constructor(private httpPublicity:HttpClient) { }
 
  getAllPublicities() {
  return this.httpPublicity.get<Publicity[]>(this.getAllPublicitiesUrl)
  }

  addPublicity(publicity:Publicity){
return this.httpPublicity.post<Publicity>(this.addPublicitylUrl,publicity);
  }
  updatePublicity(id:number,value:any){
return this.httpPublicity.put(this.updatePublicityUrl,value);
  }

  deletePublicity(id:number){
return this.httpPublicity.delete(this.deletePublicityUrl+id);
  }
  
  assignImageToPublicity(idPublicity:number,idImage:number){
return this.httpPublicity.put(this.assignImageToPublicityUrl+idPublicity,idImage);
  }

  getPublicityById(publicityId:number){
return this.httpPublicity.get<Publicity>(this.getPublicityByIdUrl+publicityId);
  }

  getPublicitiesByName(namePublicity:string){
return this.httpPublicity.get<Publicity[]>(this.getPublicitiesByNameurl+namePublicity);
  }

}
