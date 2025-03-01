import { createRoot } from 'react-dom/client';
import './index.css';
import App from './routes/App.jsx';
import { Provider } from 'react-redux';
import store from './store/store';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './routes/home.jsx';
import Searchresult from './routes/searchresult.jsx';
import { StrictMode } from 'react';
import HotelBook from './routes/hotelbook.jsx';
import Login from './routes/login.jsx';
import Signup from './routes/signup.jsx';
import Hotelregister from './routes/hotelbooking.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {path:"/hotel",element:<Searchresult/>},
      {path:"/hotelbook",element:<HotelBook/>},
      {path:"/login",element:<Login/>},
      {path:"/signup",element:<Signup/>},
      {path:"/hotelregister",element:<Hotelregister/>},
    ],
  },



  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  </StrictMode>
);
