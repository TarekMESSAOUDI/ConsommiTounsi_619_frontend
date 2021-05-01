import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  CommentAddURL="http://localhost:9091/SpringMVC/servlet/add-comment";
  CommentretrieveURL="http://localhost:9091/SpringMVC/servlet/retrieve-all-Comments";
CommentdeleteURL=" http://localhost:9091/SpringMVC/servlet/remove-comment";
  CommentretreiveById="http://localhost:9091/SpringMVC/servlet/retrieve-comment";
  NbcommentURL="http://localhost:9091/SpringMVC/servlet/afficherNbcomment";
  affecttoSubjectURL="localhost:9091/SpringMVC/servlet/affecterSubjecttoComment";
maxdisLikeURL="http://localhost:9091/SpringMVC/servlet/maxdislike";
maxLikeURL="http://localhost:9091/SpringMVC/servlet/maxlike";
totallikesURL="http://localhost:9091/SpringMVC/servlet/Totallikes";
commentbysubjectURL="http://localhost:9091/SpringMVC/servlet/Getcommentbysubject"

  constructor(private Commenthttp :HttpClient) { }


  adddepartment(comment : Comment){
    return this.Commenthttp.post<Comment>(this.CommentAddURL, comment )
  }

  getallComments():Observable<Comment[]>{
    return this.Commenthttp.get<Comment[]>(this.CommentretrieveURL);
}

deleteCommentById(id:number){
  return this.Commenthttp.delete("http://localhost:9091/SpringMVC/servlet/remove-comment"+id );
}

getCommentById():Observable<Comment[]>{
  return this.Commenthttp.get<Comment[]>(this.CommentretreiveById);
}





getCommentNB():Observable<Comment[]>{
  return this.Commenthttp.get<Comment[]>(this.NbcommentURL);
}

affectCommentTosubject(comment: Comment): Observable<any> {
  return this.Commenthttp.post(this.affecttoSubjectURL, Comment);
}

getMaxdislike():Observable<Comment[]>{
  return this.Commenthttp.get<Comment[]>(this.maxdisLikeURL);
}

getMaxlike():Observable<Comment[]>{
  return this.Commenthttp.get<Comment[]>(this.maxLikeURL);
}

gettotalMax():Observable<Comment[]>{
  return this.Commenthttp.get<Comment[]>(this.totallikesURL);
}


getcommentbySubject():Observable<Comment[]>{
  return this.Commenthttp.get<Comment[]>(this.commentbysubjectURL);
}



}
