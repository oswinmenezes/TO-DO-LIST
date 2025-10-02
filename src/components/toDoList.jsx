import { useEffect, useState } from "react";
import { deleteItem, getList } from "../call";
import DeleteIcon from '@mui/icons-material/Delete';

export default function ToDoList({items,setItems}){
    useEffect(()=>{
        async function displayAll() {
            const res=await getList();
            setItems(res);
        }
        displayAll();
    },[]);
    
    const [click, setClick] = useState([]);
    useEffect(() => {
        setClick(Array(items.length).fill(false));
    }, [items]);


    function taskComplete(index){
        let updated=[...click];//copy array
        updated[index]=!(updated[index]) //if it is true it becomes false and viceversa
        setClick(updated);//pass updated array
    }
    async function handleDelete(id){
        const data=await deleteItem(id);
        setItems(data);
    }

    return <div className="itemsContainer">
        <ul>
        {items.map((curr)=>{
            return <div className="listItem"><li key={curr.id}  onClick={()=>taskComplete(curr.id)} style={{textDecoration:click[curr.id]?"line-through":"none"}} className="toDoElements">{curr.note}</li><button className="deleteBtn" onClick={()=>handleDelete(curr.id)}><DeleteIcon /></button></div>;
        })}
    </ul>
    </div>
}