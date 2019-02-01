import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiQueryService {

  constructor(private http: HttpClient) { }

  /**
   * Returns first entry from Bacon Ipsum array
   */
  getMeat(): Observable<string> {
    return this.http.get('https://baconipsum.com/api/?type=meat-and-filler').pipe(
      map( x => x[0])
    );
  }
}
