import DefaultLayout from "../Layout/DefaultLayout"
//import { useRef } from "react";
import  { useState } from "react";



export default function SignUp(){
  const [Primer_Nombre, setPrimer_Nombre] =useState("");
  const [Segundo_Nombre,setSegundo_Nombre] =useState("");
  const [Primer_Apellido,setPrimer_Apellido] =useState("");
  const [Segundo_Apellido,setSegundo_Apellido] =useState("");
  const [Carrera_Principal,setCarrera_Principal] =useState("");
  const [Carrera_Secundaria,setCarrera_Secundaria] = useState("");
  const [Centro_regional,setCentro_regional] = useState("");
  const [Identidad_Estudiante,setIdentidad_Estudiante] = useState("");
  const [Telefono_Estudiante,setTelefono_Estudiante] = useState("");
  const [Correo_Estudiante,setCorreo_Estudiante] = useState("");
  const [imagen, setImagen] = useState<File | null>(null);
  const [imagenPreview, setImagenPreview] = useState<string | null>(null);

const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files && e.target.files[0];
  if (file) {
    setImagen(file);
    const reader = new FileReader();
    reader.onload = (e) => {
     if(e.target){
      setImagenPreview(e.target.result as string);
     }
    };
    reader.readAsDataURL(file);
    } else {
      setImagenPreview(null);
    
  }
};

  
    return(
      
        <DefaultLayout>
        <form className="form">
        <h1>Regitrarse Para Proximo Examen</h1>
        <label>Primer Nombre</label>
        <input 
        id="Primer_Nombre"type = "text" value={Primer_Nombre}
        onChange={(e)=>setPrimer_Nombre(e.target.value)}
        />
        <label>Segundo Nombre</label>
        <input 
        id="Segundo_Nombre" type = "text" value={Segundo_Nombre}
        onChange={(e)=>setSegundo_Nombre(e.target.value)}/>
        <label>Primer Apellido</label>
        <input 
        id="Primer_Apellido" type = "text" value={Primer_Apellido}
        onChange={(e)=>setPrimer_Apellido(e.target.value)}/>
        <label>Segundo Apelido</label>
        <input
         id="Segundo_Apellido" type = "text" value={Segundo_Apellido}
         onChange={(e)=>setSegundo_Apellido(e.target.value)}/>
        <label>Carrera Principal</label>
        <select
         id="Carrera_Principal"  value={Carrera_Principal}
         onChange={(e)=>setCarrera_Principal(e.target.value)}>
          <option value="">Selecciona una carrera Principal</option>
          <option value="Calidad del Cafe ">Calidad del Cafe</option>
          <option value="Ingenieria en dormir">Ingenieria en dormir</option>
          <option value="Licenciatura en Tomas">Licenciatura en Tomas</option>
        </select>
        <label>Carrera Secundaria</label>
        <select
        id="Carrera_Secundaria" value={Carrera_Secundaria}
        onChange={(e)=>setCarrera_Secundaria(e.target.value)}>
        <option value="">Selecciona una carrera Secundaria</option>
        <option value="Calidad del Cafe">Calidad del Cafe</option>
        <option value="Ingenieria en dormir">Ingenieria en dormir</option>
        <option value="Licenciatura en Tomas">Licenciatura en Tomas</option>
        </select> 
        <label>Centro Regional</label>
        <select
        id="Centro_Regional" value={Centro_regional}
        onChange={(e)=>setCentro_regional(e.target.value)}>
        <option value="">Selecciona Un Centro Regional</option>
        <option value="Ciudad Universitaria">CU</option>
        <option value="Valle de Sula">Valle de Sula</option>
        </select> 
        <label>Numero De Identidad</label>
        <input
         id="Identidad_Estudiante" type = "text" value={Identidad_Estudiante}
         onChange={(e)=>setIdentidad_Estudiante(e.target.value)}/>
        <label>Telefono</label>
        <input 
        id="Telefono_Estudiante" type = "text" value={Telefono_Estudiante}
        onChange={(e)=>setTelefono_Estudiante(e.target.value)}/>
        <label>Correo</label>
        <input
         id="Correo_Estudiante" type = "email" value={Correo_Estudiante}
         onChange={(e)=>setCorreo_Estudiante(e.target.value)}/>

<label>Subir una imagen</label>
        <input 
          id="imagen_estudiante"
          className="Subir_Imagen"
          type="file" 
          accept="image/*"
          onChange={handleImageUpload}

        />
        
        {imagenPreview && <img className="vista_previa" src={imagenPreview} alt="Vista previa" />}

       <button>Enviar</button>
              </form>
              </DefaultLayout>
           )
       
           
    

}