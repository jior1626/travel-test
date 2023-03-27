import './App.css';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Middleware from './Middleware';

import HomeView from './pages/Admin/Home/Home';
import HotelView from './pages/Admin/HotelManagement/HotelManagement';
import RoomsView from './pages/Admin/Rooms/Rooms';
import TravelerView from './pages/Travelers/Traveler';


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<TravelerView />} />
			<Route path="/auth/login" element={<Auth />} />
			<Route path="/home" element={<Middleware Element={<HomeView />} path="/home" />} />
			<Route path="/hotels" element={<Middleware Element={<HotelView />} path="/hotel" />} />
			<Route path="/hotels/:id/rooms" element={<Middleware Element={<RoomsView />} path="/hotel/:id/rooms" />} />
		</Route>
	)
);

function App() {
	return (
		<RouterProvider router={router} />
	)
}

export default App;
