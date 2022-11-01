import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeService {

  url: string = "https://api.vatcomply.com/rates";

  constructor(private http: HttpClient) { }

  getCoins() {
    return this.http.get(this.url)
  }
}
