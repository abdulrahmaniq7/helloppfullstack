import { useState, useEffect } from "react";
import { SplitScreen } from "./SplitScreen"

const Left = ()=>{
	return <h1>Left</h1>;
};

const Right = ()=>{
	return <h1>Right, learn react</h1>;
}



function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [email, setEmail] = useState(""); const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const login = async () => {
    const res = await fetch("http://localhost:8000/login.php", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      setToken(data.token);
    } else {
      alert("Login failed");
    }
  };

  useEffect(() => {
    if (!token) return;
    fetch("http://localhost:8000/hello.php", {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => res.json()).then(data => setMessage(data.message));
  }, [token]);

  return token ? <h1>{message}</h1> : (
    <div>
      <SplitScreen left={Left} right={Right} />
      <input onChange={e => setEmail(e.target.value)} placeholder="email-ido" />Email
      <input onChange={e => setPassword(e.target.value)} placeholder="password" type="password" />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;

