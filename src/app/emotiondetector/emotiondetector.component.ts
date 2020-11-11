import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { from, interval } from 'rxjs';
import { EmotionDetectionService } from '../services/emotion-detection.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-emotiondetector',
  templateUrl: './emotiondetector.component.html',
  styleUrls: ['./emotiondetector.component.css']
})
export class EmotiondetectorComponent implements OnInit {

  @ViewChild("video")
  public video: ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef;

  public captures: Array<any>;

  private mediaStream: any;
  private timer;
  emotions = [];
  username: any;

  constructor(private emotionService: EmotionDetectionService, private loginService: LoginService) {
    this.captures = [];
    this.loginService.getUserName().subscribe((data) => {
      this.username = data;
      console.log("username",this.username)
    }, (error) => {
      console.log("error in saving emotions!");
    });
   }

  ngOnInit(): void {
    this.timer = interval(10000).subscribe((t) => this.capture());
  
  }

  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => { 
        this.mediaStream = stream;
        this.video.nativeElement.srcObject = stream;
      });
    }
  }

  public capture() {
    console.log("capture hit")
    const context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    console.log("context",context)
    this.emotionService.getEmotion({"image": this.canvas.nativeElement.toDataURL("image/png")}).subscribe(data => {
      // console.log("emo data: ",data['emotion'])
      this.emotions.push(data['emotion']);
      console.log(this.emotions);
    },error => {
      console.log(error.error.message);
    });
    // console.log(this.canvas.nativeElement.toDataURL("image/png"))
    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
  }

  endgame(){
    this.timer.unsubscribe();
    this.mediaStream.getVideoTracks()[0].stop();

  }

}
