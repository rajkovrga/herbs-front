import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HerbsService {

  constructor(private http : HttpClient) { }

  public getAll(page : number = 1)
  {
    // angular jwt
      return this.http.get(environment.api + "/herbs/page/" + page);
  }

}
