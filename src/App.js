import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventroy/Inventory';
import { ProductsAndCardLoaders } from './loaders/ProductsAndCartLoaders';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Shipping from './components/Shipping/Shipping';
import PrivateRoutes from './routes/PrivateRoutes';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('products.json');
          },
          element: <Shop></Shop>
        },
        {
          path: '/shop',
          loader: () => {
            return fetch('products.json');
          },
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: ProductsAndCardLoaders,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <PrivateRoutes><Inventory></Inventory></PrivateRoutes>
        },
        {
          path: 'shipping',
          element: <PrivateRoutes><Shipping></Shipping></PrivateRoutes>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        }
      ]
    },
    {
      path: '*',
      element: <div><h2>404: Not Found</h2></div>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
