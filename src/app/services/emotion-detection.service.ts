import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmotionDetectionService {

  private url: string = "http://localhost:8080/api/users/";

  constructor(private http: HttpClient) { }

  getEmotion(body){
    console.log("dataservice hit:",body)
    return this.http.post(this.url + 'getEmotion', body, {
      observe: 'body'
    });
  }

  saveEmotion(body){
    return this.http.patch(this.url + 'saveEmotions', body, {
      observe: 'body'
    });
  }
}
