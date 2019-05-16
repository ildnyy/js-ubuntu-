import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './todoitem';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
          list:[],
          inputvalue:'',
          index: 0,
        }
        this.inputchange = this.inputchange.bind(this);   
        this.add = this.add.bind(this);    
        this.changechecked = this.changechecked.bind(this);    
        this.itemvaluechange = this.itemvaluechange.bind(this);    
        this.deleteItem = this.deleteItem.bind(this);     
        this.chooseall = this.chooseall.bind(this);    
        this.unchooseall = this.unchooseall.bind(this);   
        this.clear = this.clear.bind(this);   
      }    
        
      inputchange(e){    
        this.setState({   
          inputvalue: e.target.value   
        })  
      }  
      add(){
        const {inputvalue, index} = this.state
          this.setState({    
            list: [...this.state.list, {id: index, value: inputvalue, checked: false}],   
            inputvalue: '',  
            index: index + 1   
          })     
      }  
      
      deleteItem(index){
        const {list} = this.state
        list.splice(index, 1)
        this.setState({
          list: list
        })
      }
    
      itemvaluechange(item, index, e){    
        const {list} = this.state   
          list.splice(index, 1, {id: item.id, value: e.target.value, checked: item.checked})
          this.setState({
            list: list
          })
      }
    
      changechecked(item){
        const {list} = this.state
        item.checked = !item.checked
        this.setState({
          list: list,
        })
      }
    
      chooseall(){
        const {list} = this.state
        list.map(item => item.checked = true)
        this.setState({
          list : list
        })
      }
    
    
      unchooseall(){
        const {list} = this.state
        list.map(item => item.checked = false)
        this.setState({
          list : list
        })
      }
    
      clear(){
        this.setState({
          list: []
        })
      }
      getTodoItem(){
        return this.state.list.map((item, index) => 
        <TodoItem 
          item={item}
          key={item.id}
          value={item.value}
          checked={item.checked} 
          index={index}
          changechecked={this.changechecked}
          changevalue={this.itemvaluechange}
          deleteitem={this.deleteItem}
        />
        )
      }
    
      render (){
        const {inputvalue} = this.state
        return(
        <div>
          <div>
            <input onChange={this.inputchange} value={inputvalue} />
            <button onClick={this.add}>
              添加
            </button>
          </div>
          <ul>
            {this.getTodoItem()}
          </ul>
          <button onClick={this.chooseall}>全选</button>
          <button onClick={this.unchooseall}>取消全选</button>
          <button onClick={this.clear}>清除</button>
        </div>
        )
      }
    } 
ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
)