import React from 'react'
 import ReactDOM from 'react-dom/client'
 import App from './App.jsx'
 import './index.css'
 import {RouterProvider,createBrowserRouter} from "react-router-dom"
 import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import Search from './components/Search.jsx'
 import HistoryPage from './components/HistoryPage.jsx';

 import UserDetails from './components/UserDetails.jsx'
 const router=createBrowserRouter([
 {
  path:"/",
  element:<App/>

 },
 
  { 

    path:"/Login",
  element:<Login/>
  },
  {
   path:"/Home",
    element:<Home/>
  },
   {
   path:"/Search",
    element:<Search/>
  },
 {
    path:"/HistoryPage",
    element:<HistoryPage/>
  },
   {
    path:"/UserDetails",
    element:<UserDetails/>
 }
  
])
 ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
   )

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App';
// import Login from './components/Login.jsx';
// import Home from './components/Home.jsx';
// import Search from './components/Search';
// import HistoryPage from './components/HistoryPage.jsx';
// import UserDetails from './components/UserDetails.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/Login" element={<Login />} />
//       <Route path="/Home" element={<Home />} />
//       <Route path="/Search" element={<Search />} />
//       <Route path="/History" element={<HistoryPage />} />
//       <Route path="/UserDetails" element={<UserDetails />} />
//     </Routes>
//   </Router>
// );

