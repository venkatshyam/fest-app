import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable}  from 'rxjs/Rx';

/*
  Generated class for the AdmingetProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdmingetProvider {

  constructor(public http: Http) {
    console.log('Hello AdmingetProvider Provider');
  }
   public url= 'http://localhost:3000/users/admin';
   
  addComment (body: Object): Observable<Comment[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.url, body, options) // ...using post request
                     .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                     .catch((error:any) => Observable.throw('Server error')); //...errors if any
}


}
