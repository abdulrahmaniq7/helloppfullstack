import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import Product  from "./pages/Product";
import { Navbar } from "./components/Navbar";
import ProductDetails  from "./pages/ProductDetails";
import RedxQury from "./pages/RedxQury";
const App = ()=>{
	return (

		<Router>
		  <Navbar />
		  <Routes>
		    <Route path="/" element={<Home />} />
		    <Route path="about-us" element={<About />} />
		    <Route path="contact-us" element={<Contact />} />
		    <Route path="products" element={<Product />} />
		    <Route path="products/:title" element={<ProductDetails />} />
		    <Route path="redxproduct" element={<RedxQury />} />
		 </Routes>
		</Router>
	);
};
export default App;
