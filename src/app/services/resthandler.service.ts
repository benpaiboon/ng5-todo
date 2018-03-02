import { Injectable } from '@angular/core';
import { server_url } from '../configs/const';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import { URLSearchParams, Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { Router, ActivatedRoute, Params } from '@angular/router';
declare var $: any;

@Injectable()
export class RestHandlerService {

  headers: Headers;
  options: RequestOptions;
  token: string;

  constructor(private http: Http, /*private router: Router*/) {
  }

  postData(data: any, path: string): Observable<any> {
    let body = new URLSearchParams();
    body.append('data', JSON.stringify(data));

    let headers = new Headers({
      'Content-Type': 'application/json',
    });
    let options = new RequestOptions({ headers });
    let url = server_url + path;
    console.log('[POST] DATA : ' + JSON.stringify(data));

    return this.http.post(url, data, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getData(path: string): Observable<any> {
    let url = server_url + path;

    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }


  uploadFile(data: any) {
    let url = server_url;
    let headers = new Headers();

    headers.append('Accept', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.post(url + '/upload', data, options);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      let body;
      try {
        body = error.json() || '';
      } catch (e) {
        body = { error };
      }

      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
