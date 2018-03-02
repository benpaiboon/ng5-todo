import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

@Injectable()
export class TodoDataService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getTodos() {
    return this.http.get("http://localhost:3000/api/todo").map(res => res.json());
  }

  addTodo(data) {
    return this.http.post("http://localhost:3000/api/todo", data).map(res => res.json());
  }

  deleteTodo(id) {
    return this.http.post(`http://localhost:3000/api/todo/${id}`, { headers: this.headers }).map(res => res.json());
  }
}