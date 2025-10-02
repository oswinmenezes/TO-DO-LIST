import AddToDo from "./addTodo";
import ToDoList from "./toDoList";
import { useState } from "react";

export default function Card(){
    const [items,setItems]=useState([]);

    // function deleteItem(id){
    //     setItems((prev)=>{
    //         return prev.filter((item,index)=>{
    //             console.log(item);
    //             return index !==id;
    //         })
    //     })
    // }

    return <div className="toDoCard">
        <h1 className="toDoListHeading">To Do List</h1>
        <AddToDo items={items} setItems={setItems} />
        <ToDoList items={items} setItems={setItems}/>
    </div>
}