import React from 'react';
import  { createRoot }  from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import App from './src/App';
import Dashboard from './src/Dashboard/Dashboard';
import './index.css'
import Pagination from './src/Pagination/Pagination';
import ChartAnalytics from './src/Analytics/Chart/Chart';
const router = createHashRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: 'dashboard',
        element: <Dashboard/>
    },
    {
      path: 'pagination',
      element: <Pagination/>
    },
    {
      path: 'analytics/charts',
      element: <ChartAnalytics/>
    },
]);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
        <>
        <RouterProvider router={router}></RouterProvider>
        </>
);