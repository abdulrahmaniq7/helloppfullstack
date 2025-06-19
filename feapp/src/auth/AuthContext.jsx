import { createContext, useState, useContext } from react;
const AuthContext = createContext();

const AuthProvider = ({children})=>{
	const [isLogin, setLogin] = useState(false);
	const loginHandler = ()=>{
	   setLogin(true);
	};

	const logOutHandler = ()=>{
	   setLogout(false);
	}

	return <AuthContext.Provider client={loginHandler,logOutHandler,isLogin}>
		{children}
	</AuthContext.Provider>;
};

export const useAuth = ()=>useContext(AuthContext);
