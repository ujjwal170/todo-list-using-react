import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    let myStyle={
        margin:"30px",
    }
    return (
        <div className="my-8" style={myStyle}>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>delete</button>
        </div>
    )
}
