import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NameModel} from '../../mod-core/models/name.model';
import {API_SERVER} from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class TipsService {
  constructor(private httpClient: HttpClient) {
  }

  getTipsHumanization(): Promise<NameModel[]> {
    const url = `${API_SERVER}/tiphuma/api/v1/search/tipshumanization`;
    return this.httpClient.get<NameModel[]>(url).toPromise();
  }

  createTipHumanization(tip: NameModel): Promise<any> {
    const url = `${API_SERVER}/tiphuma/api/v1/tipsHumanization`;
    return this.httpClient.post(url, tip).toPromise();
  }
}
