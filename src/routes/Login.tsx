import { Navigate } from "react-router-dom";
import { useAuth } from "../Auth/authProvider";
import DefaultLayout from "../Layout/DefaultLayout"
import { useState } from 'react';


export default function Login(){
    const [Numero_De_Empleado, setNumero_De_Empleado] =useState("");
    const [Clave,setClave] =useState("");
    const auth = useAuth();

    if(auth.isAuthenticated){
         return<Navigate to="/Dashboard"/>
    }
    return(
<DefaultLayout>



       <form className="form">
 <h1> Ingresar </h1>
 <label>Numero de Empleado</label>
 <input type = "text" value={Numero_De_Empleado}
 onChange={(e)=>setNumero_De_Empleado(e.target.value)}
 pattern="^[0-9]+$"
 />

 <label>Clave</label>
 <input type = "password" value={Clave}
 onChange={(e)=>setClave(e.target.value)}
 />
<button>Inciar Sesion</button>
<p>
  <a href=" /SingUp">Olvide mi contraseña</a>.
</p>
       </form>
       </DefaultLayout>
    )

    
}