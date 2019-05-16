import React, { Component } from 'react';



class TodoItem extends Component{
    render(){
        const {item, value, checked, index, changechecked, changevalue, deleteitem} = this.props
        return(
        <div>
            <li>
                <input type="checkbox" onChange={changechecked.bind(this, item)} checked={checked}/>
                <input value={value} onChange={changevalue.bind(this, item, index)}/>
                <button onClick={deleteitem.bind(this, index)}>删除</button>
            </li>
        </div>
        )
    }
}

export default TodoItem;