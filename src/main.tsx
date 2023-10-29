import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login.tsx';
import SingUp from './routes/SingUp.tsx';
import Dashboard from './routes/Dashboard.tsx';
import Protected from './routes/Protected.tsx';
import Admisiones_Clasificacion from './routes/Admisiones_Clasificacion.tsx';
import Registrar_Notas from './routes/Registrar_Notas.tsx';
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
}
],
}
,
{
  path:"/Admisiones_Clasificacion",
  element:<Admisiones_Clasificacion/>, 
},
{
  path:"/Registrar_Notas",
  element:<Registrar_Notas/>, 
}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
   
  </React.StrictMode>,
)
