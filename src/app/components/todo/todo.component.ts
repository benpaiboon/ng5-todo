import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  private todos: Array<object>;

  constructor() {
    this.todos = [];
  }

  ngOnInit() {
  }

  addTodo(todoForm: NgForm) {
    // console.log(todoForm.value);
    // console.log(todoForm.valid);

    if (todoForm.valid === false) {
      alert('Please enter your task');
    }
    else {
      let todoObj = {
        newTodo: todoForm.value.todoText,
        checked: false
      }
      this.todos.push(todoObj);   
    }
    todoForm.reset();
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  deleteSelectedTodo() {
    for(let i=(this.todos.length -1); i > -1; i--) {
      if(this.todos[i]) {
        this.todos.splice(i, 1);
      }
    }
  }

}
