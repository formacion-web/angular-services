import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NeighbourService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':environment.url
    })
  }
  constructor(private http: HttpClient) { }

  getNeighbours$(code: string):Observable<any>{
    return this.http.get(environment.url_neighbour.concat(code),this.httpOptions)
  }
}
