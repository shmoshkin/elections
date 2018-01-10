import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Selector} from '../../models/Selector.model';

@Injectable()
export class CrudService {

  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getSelectors():Promise<any>{

    return this.http.get<Selector[]>(this.serviceUrl).toPromise();
  }

  update(id : String, field: String, value : any){

  }

  create(model : Selector){

  }
}
