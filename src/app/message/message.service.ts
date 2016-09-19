import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class MessageService {
    constructor(private http: Http) { }

    public getMessage(): Observable<Response> {
        return this.http.get('/status');
    }
}
