import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login.tsx';
import SingUp from './routes/SingUp.tsx';
import Dashboard from './routes/Dashboard.tsx';
import Protected from './routes/Protected.tsx';
import { AuthProvider } from './Auth/authProvider.tsx';

const router = createBrowserRouter([
{
path:"/",
element:<Login/>,
},

{
path:"/SingUp",
element:<SingUp/>,
},

{
path:"/",
element:<Protected/>,
children:[{
  path:"/Dashboard",
element:<Dashboard/>,
}],
}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
   
  </React.StrictMode>,
)
