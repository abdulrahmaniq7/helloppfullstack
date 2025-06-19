import styled from "styled-components";
import MyLink from './MyLink';
const Container = styled.div`display:flex; flex-direction:row;   background-color: #000;`;
const Panel = styled.div`margin:10px;color:#bbb;`;
const Col = styled.div`display:flex;`;
export const Navbar = ()=>{
	return (
	   <Container>
		<Col>
		<Panel>
		<MyLink to="/">Home</MyLink>
		</Panel>
		<Panel>
		<MyLink to="about-us">About</MyLink>
		</Panel>
		<Panel>
		<MyLink to="contact-us">Contact</MyLink>
	   	</Panel>
		<Panel>
		 <MyLink to="products">Product</MyLink>
		</Panel>
		<Panel>
		 <MyLink to="redxproduct">Red Prod</MyLink>
		</Panel>
		</Col>
		<Col>
		  Login
		</Col>
	   </Container>
	);
}
