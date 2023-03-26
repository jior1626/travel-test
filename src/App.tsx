import './App.css';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider  } from 'react-router-dom';
import Login from './pages/Auth/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />} />
      {/* <Route path="/" element={} />
      <Route path="/home" element={<Middleware Element={<Home />}/>} />
      <Route path="/users" element={<Middleware Element={<Users />}/>} /> */}
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
