import "./App.css";
import "./components/Styles/layout.css";
import "./components/Styles/global.css";
import "./components/Styles/layout.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BookingPage from "./components/BookingPage";
import HomePage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/booking" element={<BookingPage />} />
			</Routes>
			<Footer />
		</>
	);
}
export default App;
