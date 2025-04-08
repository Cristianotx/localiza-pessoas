import { HttpServiceBase } from '@/shared/bases/http-service/http-service-base.service';
import { IStatistical } from '@/shared/interfaces/person.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpPersonService extends HttpServiceBase<any> {

  constructor() {
    super('pessoas/aberto')
  }

  public getStatistical(): Observable<IStatistical> {
    return this.get('estatistico');
  }
}
