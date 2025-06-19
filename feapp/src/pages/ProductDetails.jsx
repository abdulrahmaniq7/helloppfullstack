import {useQuery} from '@tanstack/react-query';
import {useParams} from 'react-router-dom';
import axios from "axios";
import styled from "styled-components";
const prodInfo = async (id)=>{
	const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
	return res.data;
};

const Container = styled.div`width:100%; margin:auto 0`;
const Panel = styled.div`max-width:80%; width:100%; margin: 10px 10px; padding:10px;`;
const ProductDetails = ()=>{
  const {title:id} = useParams();
  const {data, isLoading, error} = useQuery({
	  queryKey:["prodinfo", id], 
	  queryFn:()=>prodInfo(id),
	  staleTime:10000
  });
  if(isLoading) return <div>Loading...</div>;
  if(error) return <div>{error}</div>;
  return (<div>
	 <Container>
	  <Panel>
	   <div>Title:{data.title}</div>
	   <div>Body:{data.body}</div>
          </Panel>
	 </Container>
	</div>);
};

export default ProductDetails;
