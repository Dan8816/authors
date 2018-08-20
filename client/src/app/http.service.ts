import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  author;
  constructor(private _http: HttpClient){}

  getAuthors(){
    return this._http.get('/main');
  }

  createAuthors(author){
    return this._http.post('/main', author);
  }

  updateAuthor(thisAuthor) {
    return this._http.patch(`/main/${thisAuthor._id}`, thisAuthor);
  }

  deleteAuthor(thisAuthor){
    return this._http.delete(`/main/${thisAuthor._id}`, thisAuthor);
  }

}