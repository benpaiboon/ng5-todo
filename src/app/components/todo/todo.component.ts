import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoDataService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoDataService]
})
export class TodoComponent implements OnInit {

  private todos: Array<object>;

  constructor(private todoDataService: TodoDataService) {
    this.todos = [];
  }

  ngOnInit() {
    this.todoDataService.getTodos().subscribe(res => {
      this.todos = res
    });
  }

  addTodo(todoForm: NgForm) {
    if (todoForm.valid === false) {
      alert('Please enter your task');
    }
    else {
      let todoObj = {
        todoText: todoForm.value.todoText,
        checked: false
      }
      console.log(todoObj);
      this.todos.push(todoObj);
      // this.todoDataService.addTodo(todoObj).subscribe(res => {
      //   this.todos.unshift(todoObj);
      // });
    }
    todoForm.reset();
  }

  deleteTodo(data: any, id: any) {
    console.log(id);
    this.todos.splice(id, 1);
    // this.todoDataService.deleteTodo(id).subscribe(res => {
    //   data.splice(id, 1);
    // }, (error) => {
    //   console.log(error);
    // });
    // this.todos.splice(id, 1);
  }

  deleteSelectedTodo() {
    for (let i = (this.todos.length - 1); i > -1; i--) {
      if (this.todos[i]) {
        this.todos.splice(i, 1);
      }
    }
  }

}
