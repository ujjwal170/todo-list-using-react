
import "./App.css";
import Header from "./MY components/Header";
import {Foote} from "./MY components/Footer1";
import {Todos} from "./MY components/Todos";
import {AddTodo} from "./MY components/AddTodo";
import React, { useState,useEffect } from 'react';
import {About} from "./MY components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {


  let initTodo;


  if(localStorage.getItem("todos")===null)
  {
     initTodo=[];
  }
  else
  {
     initTodo=JSON.parse(localStorage.getItem("todos"))
  }


  const onDelete=(todo)=>{
    console.log("i am on delete ", todo)

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos))
  }


  

  const addTodo=(title,desc)=>
  {
    console.log("adding item to todo list ",title,desc)
    let sno;
    if(todos.length==0)
     sno=0;
    else
     sno=todos[todos.length-1].sno+1;
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
      }
      setTodos([...todos,myTodo]);
      console.log(myTodo);
  }



  const [todos,setTodos]=useState(initTodo);



  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))   
  }, [todos])




  return (
    // this block is not html or js. it is a mixture of them and is called javascript syntax extension.
    <>
    <Router>
     <Header title="my todos list" searchBar={true} />
     <Switch>
          <Route exact path="/" render={()=>{
            return (
              <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
              </>
            )
          }}>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
     
     <Foote/>
    </Router>
    </>
  );
}

export default App;
