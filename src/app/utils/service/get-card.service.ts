import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetCardService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = '../../../assets/data/card.json';
  }

  getCard() {
    return this.http.get(this.url);
  }
}
