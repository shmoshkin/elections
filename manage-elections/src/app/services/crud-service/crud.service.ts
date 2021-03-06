import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Selector} from '../../models/Selector.model';

@Injectable()
export class CrudService {

  constructor(private http: HttpClient) { }

  getSelectors():Promise<any>{

    return this.http.get<Selector[]>('/api/selectors').toPromise();
  }

  update(id : String, field: String, value : any){

  }

  create(model : Selector){

  }
}
