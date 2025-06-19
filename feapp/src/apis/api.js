import axios from "axios";
export const fetchPost = async (page)=>{
 const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
 return res.data;
};


