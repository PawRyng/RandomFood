import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './view/App';
import reportWebVitals from './reportWebVitals';
//styles
import "./view/Style/style.css"
<<<<<<< HEAD
//views
import ElementView from './view/views/mainViewViews/elementView';
import MainView from './view/views/mainView';
//loaders
import mainLoader from "./view/Actions/mainViewLoader"
import mealLoader from "./view/Actions/productLoader";
=======
//elements
import MainView from './view/views/mainView';
import NonUsed from './view/views/mainViewViews/nonUsed'

//loaders
import mainLoader from "./view/Actions/isUsed"
>>>>>>> 4100ae887ca76a4344c47421934862d48f72c43d


// imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AppProvider } from './view/Controllers/appState';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainView />,
    errorElement: <div>error</div>,
    loader: mainLoader,
  },
  {
<<<<<<< HEAD
    path:"/meal/:id",
    element: <ElementView />,
    loader: mealLoader,
=======
    path:"/no-used",
    element:<NonUsed/>,
    errorElement: <div>error</div>,
    loader: mainLoader, 
>>>>>>> 4100ae887ca76a4344c47421934862d48f72c43d
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);

reportWebVitals();
