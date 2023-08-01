import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './view/App';
import reportWebVitals from './reportWebVitals';

import "./view/Style/style.css"
//elements
import MainView from './view/views/mainView';
import NonUsed from './view/views/mainViewViews/nonUsed'

//loaders
import mainLoader from "./view/Actions/isUsed"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainView />,
    errorElement: <div>error</div>,
    loader: mainLoader,
  },
  {
    path:"/no-used",
    element:<NonUsed/>,
    errorElement: <div>error</div>,
    loader: mainLoader, 
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
