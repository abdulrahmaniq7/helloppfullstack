import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import Link from "react-router-dom";

const fetchPost = async ()=>{
 const res = await axios.get('https://jsonplaceholder.typicode.com/todos/');
 return res.data;
};

const Product = ()=>{
   const { data, isLoading, error } = useQuery(['posts'], fetchPost);
   if(isLoading) return <p>Loading posts....</p>;
   if(error) return <p>Error fetching posts</p>;
   return (
	<div>Test</div>
  );
};

export default Product;
