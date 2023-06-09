import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './MainPage/MainPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;