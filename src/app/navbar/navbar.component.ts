import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { GamesService } from '../services/games.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  studentname: any;
  username: any;
  grade1: any;
  grade2: any;
  message: any;
  marks: number;
  check: number;
grade: number;
  constructor(private loginService: LoginService, private router: Router, private dataService: DataService, private gameService: GamesService) {
  this.marks = -1;
  this.check = 0;

    if (localStorage.getItem('token') != null) {
      this.loginService.getUserName().subscribe((data) => {
        this.username = data;
      }, (error) => {
        this.router.navigate(['/home']);
      });
      this.loginService.getStudentName().subscribe((data) => {
        this.studentname = data;
      }, (error) => {
        this.router.navigate(['/home']);
      });
      var uname = localStorage.getItem('uname');
      this.gameService.getStudentDetails(uname).subscribe((data:any) => {
        // console.log(data.totalMarks);
        this.marks = data.totalMarks;
      }, (error) => {
        
      });
    } else {
      this.router.navigate(['/home']);
    }

    if (localStorage.getItem('grade') === 'Grade 1') {
      this.grade1 = true;
      this.grade2 = false;
      this.grade = 1
    }
    if (localStorage.getItem('grade') === 'Grade 2') {
      this.grade1 = false;
      this.grade2 = true;
      this.grade = 2
    }

  }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(message => this.message = message);
    console.log("message", this.message, localStorage.getItem('grade'))
    if (this.message.split(",")[1] == "pass") {
      this.loginService.getGrade(this.message.split(",")[0]).subscribe((data: any) => {
        console.log("grade", data.grade);
        localStorage.setItem('grade',data.grade);
        if (localStorage.getItem('grade') === 'Grade 1') {
          this.grade1 = true;
          this.grade2 = false;
        }
        if (localStorage.getItem('grade') === 'Grade 2') {
          this.grade1 = false;
          this.grade2 = true;
        }

      }, (error: any) => {

      });
    }
    if (this.message.split(",")[1] == "face") {
      this.loginService.getStudentGrade(this.message.split(",")[0]).subscribe((data: any) => {
        console.log("grade", data.grade);
        localStorage.setItem('grade',data.grade);
        if (localStorage.getItem('grade') == 'Grade 1') {
          this.grade1 = true;
          this.grade2 = false;
        }
        if (localStorage.getItem('grade') == 'Grade 2') {
          this.grade1 = false;
          this.grade2 = true;
        }

      }, (error: any) => {

      });
    }


  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('uname');
    this.router.navigate(['/login']);
  }

  checkToken(){
    return localStorage.getItem('token') != null;
  }
  checkNullToken(){
    return localStorage.getItem('token') == null;
  }

}
