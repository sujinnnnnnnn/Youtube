import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navvar from './components/Navvar';
import NotFound from './components/NotFound';
import Root from './components/Root';
// 👉 <Videos>🔥
	//videos 👉 <Videos>🔥 
	///videos/query 👉 <Videos>🔍 
	//videos/watch/id 👉 <VideoDetail>/ 클릭했을 때 
import "./index.css";
import Home from './pages/Home';
import VideoDetails from './pages/VideoDetails';
import Videos from './pages/Videos';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root />,
    errorElement:<NotFound />,
    children: [
      {
        index:true,
        element:<Home />
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
