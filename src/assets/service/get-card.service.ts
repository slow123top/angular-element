import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetCardService {
  constructor(private http: HttpClient,
    private url: string) { }
  getCard() {
    this.http.get(this.url).subscribe()


  }
}
