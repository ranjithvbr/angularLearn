import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todo = '';
  todoList = []
  btnChange = true
  editId = null

  handleChange(e:any){
    this.todo = e.target.value
  }

  addList(){
    this.todoList.push(this.todo)
  }

  handleEdit(id){
    this.todo = this.todoList[id] 
    this.editId = id
    this.btnChange = false
  }

  handleDelete(id){
    let todoListArr = []
    this.todoList.filter((data,index)=>{
      if(id !== index){
        todoListArr.push(data)
      }
    })
    this.todoList = todoListArr
  }

  updateList(){
    this.todoList[this.editId] = this.todo
    this.btnChange = true
  }

}
