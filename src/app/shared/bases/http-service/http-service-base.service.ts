import { HttpClient } from "@angular/common/http";
import { IHttpService } from "./http-service-interface";
import { environment } from "@/environments/environment";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { buildQueryParams } from "@/shared/helpers/query-params.herper";

type ApiVersionType = 'v1';

const httpOptions = {
  headers: {
    'Content-Type': 'application/json',
  }
}


export class HttpServiceBase<T> implements IHttpService<T> {
  private httpClient: HttpClient;
  private urlBase: string = environment.apiProxy.url;

  constructor(controller: string, version: ApiVersionType = 'v1', urlBase?: string) {
    this.httpClient = inject(HttpClient);
    this.setUrlBase(controller, version, urlBase);
  }
  public get(url?: string, params?: Object): Observable<T> {
    return this.httpClient.get<T>(this.getUrlWithParams(url, params), httpOptions);
  }
  public post(url: string, body?: T): Observable<T> {
    throw new Error("Method not implemented.");
  }
  public put(url: string, body?: T): Observable<T> {
    throw new Error("Method not implemented.");
  }
  public delete(url: string, params?: any): Observable<T> {
    throw new Error("Method not implemented.");
  }

  private getUrlWithParams(url?: string, params?: Object): string {
    return params ? `${this.getUrl(url)}?${buildQueryParams(params)}` : this.getUrl(url);
  }

  private getUrl(url?: string): string {
    return url ? `${this.getUrlBase()}/${url}` : this.getUrlBase();
  }

  private getUrlBase(): string {
    return this.urlBase;
  }

  private setUrlBase(controller: string, version: ApiVersionType, urlBase?: string): void {
    if (urlBase) this.urlBase = urlBase;
    else this.urlBase = `${this.urlBase}/${version}/${controller}`;
  }
}
