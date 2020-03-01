import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HerbService {

  constructor(private httpClient : HttpClient) { }

  public getHerb(id : any)
  {
    return this.httpClient.get(environment.api + "/herbs/" + id);
  }

  public getComments(id : any, page = 1)
  {
    return this.httpClient.get(environment.api + "/herbs/comments/" + id + "/page/" + page);
  }
}
