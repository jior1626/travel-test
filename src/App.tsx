import './App.css';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Middleware from './Middleware';
import Home from './pages/Admin/Home/Home';
import HotelManagement from './pages/Admin/HotelManagement/HotelManagement';
import ListRooms from './components/ListRooms/ListsRooms';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<Auth />} />
			<Route path="/home" element={<Middleware Element={<Home />} path="/home" />} />
			<Route path="/hotel" element={<Middleware Element={<HotelManagement />} path="/hotel" />} />
			<Route path="/hotel/:id/rooms" element={<Middleware Element={<ListRooms />} path="/hotel/:id/rooms" />} />
		</Route>
	)
);

function App() {
	return (
		<RouterProvider router={router} />
	)
}

export default App;
