import {Component, OnInit} from '@angular/core';
import {NameModel} from '../../../mod-core/models/name.model';
import {TipsService} from '../../services/tips.service';

@Component({
  selector: 'app-tiphumanization-management',
  templateUrl: './tips-humanization-management-list.component.html',
  styleUrls: ['./tips-humanization-management-list.component.scss']
})
export class TipsHumanizationManagementListComponent implements OnInit {
  tipsHumanization: NameModel[] = [];

  constructor(private tipshumaservice: TipsService) {
  }

  ngOnInit(): void {
    this.tipshumaservice.getTipsHumanization().then(data => this.tipsHumanization = data);
  }
}
