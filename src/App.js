import "./App.css";
import MemeGenerator from "./components/MemeGenerator";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="app">
			<Navbar />
			<MemeGenerator />
		</div>
	);
}

export default App;
