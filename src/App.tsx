import './App.css';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Middleware from './Middleware';

import HomeView from './pages/Admin/Home/Home';
import HotelView from './pages/Admin/HotelManagement/HotelManagement';
import RoomsView from './pages/Admin/Rooms/Rooms';


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<Auth />} />
			<Route path="/home" element={<Middleware Element={<HomeView />} path="/home" />} />
			<Route path="/hotel" element={<Middleware Element={<HotelView />} path="/hotel" />} />
			<Route path="/hotel/:id/rooms" element={<Middleware Element={<RoomsView />} path="/hotel/:id/rooms" />} />
		</Route>
	)
);

function App() {
	return (
		<RouterProvider router={router} />
	)
}

export default App;
