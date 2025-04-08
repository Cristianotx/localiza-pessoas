import { Observable } from "rxjs";

export interface IHttpService<T> {
    get(url: string, params?: any): Observable<T | T[]>;
    getById(url: string, id: string): Observable<T>;
    post(url: string, body?: T): Observable<T>;
    put(url: string, body?: T): Observable<T>;
    delete(url: string, params?: any): Observable<T>;    
}
