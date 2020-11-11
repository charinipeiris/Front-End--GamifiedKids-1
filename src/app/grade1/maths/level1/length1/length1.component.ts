import { Component, OnInit } from '@angular/core';
declare function testlength1(): any;
declare function testlength2(): any;
@Component({
  selector: 'app-length1',
  templateUrl: './length1.component.html',
  styleUrls: ['./length1.component.css']
})
export class Length1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // testlength1();
    // testlength2();
  }

}
