import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './view/App';
import reportWebVitals from './reportWebVitals';

import "./view/Style/style.css"

import MainView from './view/views/mainView';

import mainLoader from "./view/Actions/mainViewLoader"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainView />,
    errorElement: <div>error</div>,
    loader: mainLoader,
  },
  {
    path:"/user",
    element: <div>test</div>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
