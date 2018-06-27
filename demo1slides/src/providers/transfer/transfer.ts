import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TransferProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransferProvider {
  public pageData: any ;

  constructor(public http: HttpClient) {
    console.log('Hello TransferProvider Provider');
  }

}
