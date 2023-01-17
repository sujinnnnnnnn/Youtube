import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './components/NotFound';
import Root from './components/Root';
import "./index.css";
import VideoDetails from './pages/VideoDetails';
import Videos from './pages/Videos';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root />,
    errorElement:<NotFound />,
    children: [
      {
        index:true,
        element:<Videos />
      },
      {
        path: "/videos",
        element:<Videos />
      },
      {
        path: "/videos/:keyword",
        element:<Videos />
      },
      {
        path: "videos/watch/:videoId",
        element:<VideoDetails />
      },
    ],
  },
  
]);

function App() {
  
   
    
     return <RouterProvider router={router} />
      
  
  
}

export default App;
