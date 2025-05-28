import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/Navbar";
const App = ()=>{
	return (

		<Router>
		  <Navbar />
		  <Routes>
		    <Route path="/" element={<Home />} />
		    <Route path="about-us" element={<About />} />
		    <Route path="contact-us" element={<Contact />} />
		  </Routes>
		</Router>
	);
};
export default App;
