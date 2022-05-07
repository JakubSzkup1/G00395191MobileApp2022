import { Component, OnInit } from '@angular/core';
import {GoalscorersService} from '../Services/goalscorers.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  goalscorerData: any [];

  constructor(private goalservice: GoalscorersService) { }

  //Data should be read in from the service.
  ngOnInit() {
    this.goalservice.getGoalscorerData().subscribe(
      (data)=>{
        this.goalscorerData=data.data;
        console.log(this.goalscorerData);

      }
    );
  }

}
