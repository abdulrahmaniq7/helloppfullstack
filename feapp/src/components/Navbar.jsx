import styled from "styled-components";
import MyLink from './MyLink';
const Container = styled.div`display:flex; flex-direction:row;   background-color: gold;`;
const Panel = styled.div`margin:10px;color:#000;`;
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
		</Col>
		<Col>
		  Login
		</Col>
	   </Container>
	);
}
