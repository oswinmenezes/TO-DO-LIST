import axios from "axios"
const base=`http://localhost:3000`;
export async function getList(){
    const res=await axios.get(`${base}/getList`);
    console.log(res.data);
    return res.data;
};
export async function addNewItemToList(item) {
    const res=await axios.post(`${base}/addNewItem`,{item});
    console.log(res.data);
    return res.data;   
}
export async function deleteItem(id) {
    const res=await axios.delete(`${base}/deleteItem/${id}`);
    console.log(res.data);
    return res.data;    
}