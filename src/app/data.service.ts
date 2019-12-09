import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Data } from './data'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
  ) { }

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>("http://127.0.0.1:5000/latest-data")
  }
}
