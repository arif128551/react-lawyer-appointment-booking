import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header></Header>
			<div>
				<Outlet />
			</div>
			<Footer />
		</>
	);
}

export default App;
