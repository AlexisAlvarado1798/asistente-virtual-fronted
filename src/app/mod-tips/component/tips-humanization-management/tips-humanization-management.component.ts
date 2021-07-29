import {Component, OnInit} from '@angular/core';
import {TipsService} from '../../services/tips.service';
import {NameModel} from '../../../mod-core/models/name.model';

interface Time {
  name: number,
}

interface AmPm {
  name: String,
}

@Component({
  selector: 'app-tiphumanization-management',
  templateUrl: './tips-humanization-management.component.html',
  styleUrls: ['./tips-humanization-management.component.scss']
})


export class TipsHumanizationManagementComponent implements OnInit {
  checked: boolean = false;
  tips = <NameModel>{};
  submitted = false;
  time: Time[];
  minute: any;
  ampm: AmPm[];


  constructor(public tipsService: TipsService) {
    this.time = [{name: 1},
      {name: 2},
      {name: 3},
      {name: 4},
      {name: 5},
      {name: 6},
      {name: 7},
      {name: 8},
      {name: 9},
      {name: 10},
      {name: 11},
      {name: 12}
    ];

    this.minute = [
      {name: 1},
      {name: 2},
      {name: 3},
      {name: 4},
      {name: 5},
      {name: 6},
      {name: 7},
      {name: 8},
      {name: 9},
      {name: 10},
      {name: 11},
      {name: 12},
      {name: 13},
      {name: 14},
      {name: 15},
      {name: 16},
      {name: 17},
      {name: 18},
      {name: 19},
      {name: 20},
      {name: 21},
      {name: 22},
      {name: 23},
      {name: 24},
      {name: 25},
      {name: 26},
      {name: 27},
      {name: 28},
      {name: 29},
      {name: 30},
      {name: 31},
      {name: 32},
      {name: 33},
      {name: 34},
      {name: 35},
      {name: 36},
      {name: 37},
      {name: 38},
      {name: 39},
      {name: 40},
      {name: 41},
      {name: 42},
      {name: 43},
      {name: 44},
      {name: 45},
      {name: 46},
      {name: 47},
      {name: 48},
      {name: 49},
      {name: 50},
      {name: 51},
      {name: 52},
      {name: 53},
      {name: 54},
      {name: 55},
      {name: 56},
      {name: 57},
      {name: 58},
      {name: 59}
    ];

    this.ampm = [{name: "AM"},
      {name: "PM"}];

  }

  ngOnInit(): void {
    this.checked = true;
  }

  async onClickSave(): Promise<void> {
    await this.tipsService.createTipHumanization(this.tips);
  }
}
