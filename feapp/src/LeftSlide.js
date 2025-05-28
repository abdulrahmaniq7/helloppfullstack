export const LeftSlide = ({person})=>{
   	const {userId, id, title, body} = person || {};
	if(person){ return (<h1>id:{id}-Userid:{userId}-title:{title}-body{body}</h1>);}else{ return <h1>Loading...</h1>};
};
