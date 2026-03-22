import "./App.css";
import "./components/Styles/layout.css";
import "./components/Styles/global.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BookingPage from "./components/BookingPage";
import HomePage from "./components/Homepage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
	return (
		<BrowserRouter basename="/little-lemon-restaurant">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/booking" element={<BookingPage />} />
				<Route path="/confirmed" element={<ConfirmedBooking />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}
export default App;
