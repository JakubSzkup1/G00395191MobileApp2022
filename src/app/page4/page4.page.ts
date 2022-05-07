import { Component, OnInit } from '@angular/core';
import {Flashlight} from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {

  constructor(private flashlight: Flashlight) { }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  Flashlight(){
    this.flashlight.toggle(); //flashlight that toggles. using cordova plugin
  }
  ngOnInit() {
  }

}
