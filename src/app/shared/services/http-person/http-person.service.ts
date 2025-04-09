import { IFilter } from '@/pages/persons/components/filter/filter.component';
import { HttpServiceBase } from '@/shared/bases/http-service/http-service-base.service';
import { IPerson, IResponse, IStatistical } from '@/shared/interfaces/person.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpPersonService extends HttpServiceBase<any> {

  constructor() {
    super('pessoas')
  }

  public getStatistical(): Observable<IStatistical> {
    return this.get('aberto/estatistico');
  }

  public getMissings(filter: IFilter): Observable<IResponse> {
    return this.get('aberto/filtro', filter);
  }

  public getById(id: string): Observable<IPerson> {
    return this.get(id);
  }

}
