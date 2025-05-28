import { NavLink } from 'react-router-dom';
const MyLink = ({to,children})=>{
  return (
	<NavLink to={to} end className={({isActive})=>isActive ? "active genmenu" : "genmenu" }>
	 {children}
	</NavLink>
  );
};

export default MyLink;
