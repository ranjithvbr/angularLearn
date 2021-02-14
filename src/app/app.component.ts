import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todo = '';
  todoList = []

  handleChange(e:any){
    this.todo = e.target.value
  }

  addList(){
    this.todoList.push(this.todo)
  }

  handleDelete(id){
    console.log(id,"id")
    let todoListArr = []
    this.todoList.filter((data,index)=>{
      if(id !== index){
        todoListArr.push(data)
      }
    })
    this.todoList = todoListArr
  }

}
