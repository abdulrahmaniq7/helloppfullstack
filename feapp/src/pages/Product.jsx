import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import { Link, Outlet}  from "react-router-dom";
import { useState } from "react";
import { fetchPost } from "../apis/api";

const Product = ()=>{
   const [page, setPage] = useState(1);
   const { data, isLoading, error, isFetching } = useQuery({queryKey:['posts', page], queryFn:()=>fetchPost(page), staleTime:10000, keepPreviousData:true});
   if(isLoading) return <p>Loading posts....</p>;
   if(error) return <p>Error fetching posts</p>;
   return (
	<div>
	   {
		data.map(({title, id}, ind)=>{
	    	return (
		    <div key={ind}>
		    	<Link to={`/products/${id}`}>
		    		{title}-{id}
		    	</Link>
		    </div>)
		})
	   }
	   <button onClick={()=>setPage(Math.max(page-1,1))} disabled={page==1}>Prev</button>
	   <button onClick={()=>setPage(page+1)} disabled={data.length<10}>Next</button>
	        {isFetching && <span> 🔄 Fetching...</span>}
	   </div>
  );
};

export default Product;
