import { useState } from "react"
import { addNewItemToList } from "../call";

export default function AddToDo({items,setItems}){
    const [newItem,setNewItem]=useState("");
    function handleNewItem(Event){
        setNewItem(Event.target.value);
        console.log(Event.target.value);
    }
    
    async function AddItem(){
        const data=await addNewItemToList(newItem);
        setItems(data);
        setNewItem("");
    }
    function hanndlePress(event){
        console.log(event.key)
        if(event.key==="Enter"){
            AddItem();
        }
    }

    return <div className="newItemAddContainer">
        <input className="newItemInput" name="newItem" value={newItem}  type="text" onKeyDown={hanndlePress} onChange={handleNewItem} placeholder="Enter a Task" />
        <button className="addBtn" onClick={AddItem} onKeyDown={hanndlePress}>Add</button>
    </div>
}