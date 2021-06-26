import React from 'react';
import {TodoItem} from "./TodoItem";
export const Todos = (ujj) => {           // we dont necessarily have to use the word "props" inside. we can use anything.
  
    return (
        <div className="container" >
            <h3 className="my-3" >Todos list</h3>
            {/* <TodoItem todo={props.todos[0]}/>  */}
            {ujj.todos.length===0?"no todos to display" : 
            ujj.todos.map((element,index)=>{
                return (
                    <>
                    <h3>Todo List item index {index} </h3>
                    <TodoItem todo={element} key={element.sno} onDelete={ujj.onDelete}/> <hr/>
                </>
                )
            })
            }
        </div>
    )
}
