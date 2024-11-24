import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Login from "./routes/Login";
import DashboardsPage from './pages/Dashboards';
import OrdersPage from './pages/Orders';
import Clients from './routes/Users';
import PetsPage from './pages/Pet';
import ProductsPage from './pages/Products';
import ServicesPage from './pages/Services';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/dashboard",
    element: <DashboardsPage />,
  },
  {
    path: "/pedidos",
    element: <OrdersPage />,
  },
  {
    path: "/clientes",
    element: <Clients />,
  },
  {
    path: "/pets",
    element: <PetsPage />,
  },
  {
    path: "/produtos",
    element: <ProductsPage />,
  },
  {
    path: "/servicos",
    element: <ServicesPage />,
  },
  {
    path: "/login",
    element: <Login />,

  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
)
