import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  public showSpinner: boolean = false;
  private url: string = "http://localhost:8080/api/users/savemarks/";
  private url1: string = "http://localhost:8080/api/users/";

  constructor(private http: HttpClient) { }

  submitGame(body: any, username: string) {
    console.log('hit:', body)
    return this.http.post(this.url + username, body);
  }

  getStudentDetails(studentname){
    // console.log("uname",studentname)
    return this.http.get(this.url1 + 'getdetails/' + studentname, {
      observe: 'body',
    });
  }

  getTotalMarks(studentname){
    // console.log("uname",studentname)
    return this.http.get(this.url1 + 'getmarks/' + studentname, {
      observe: 'body',
    });
  }

  getUserInfo(username){
        // console.log("uname",studentname)
        return this.http.get(this.url1 + 'getdetails/' + username, {
          observe: 'body',
        }).toPromise();
  }
  
  getComletedGames(username){
    // console.log("uname",studentname)
    return this.http.get(this.url1 + 'getcompletedgames/' + username, {
      observe: 'body',
    });
  }

  getranks(grade){
    // console.log("uname",studentname)
    return this.http.get(this.url1 + 'getranks/' + grade, {
      observe: 'body',
    });
  }
  getGamesforNav(username){
    return this.http.get(this.url1 + 'getgamesfornav/' + username, {
      observe: 'body',
    });
  }

  sendEmail(body: any, username: string){
    // console.log("uname",studentname)
    return this.http.post(this.url1 + 'sendemail/' + username, body); 
}
getUserNameforFace(studentname){
  return this.http.get(this.url1 + 'getstudentuname/' + studentname, {
    observe: 'body',
  });
}

}

