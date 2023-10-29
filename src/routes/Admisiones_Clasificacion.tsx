import DefaultLayout from "../Layout/DefaultLayout";
export default function Admisiones_Clasificacion(){
    return(
        <DefaultLayout>
        <h1>Clasificaciones</h1>
        <select
        id="Carrera">
        <option value="">Selecciona Una Carrera</option>
        <option value="Dormir">Dormir</option>
        <option value="Comer">Dormir</option>
        </select> 
        <button className="boton_clasificar">Clasificar</button>
        <table>
        <thead>
          <tr>
            <th>Primer Nombre</th>
            <th>Segundo Nombre</th>
            <th>Primer Apellido</th>
            <th>Segundo Apellido</th>
            <th>Identidad</th>
            <th>Telfono</th>
            <th>Correo</th>
            <th>Examen Secundario</th>
            <th>Examen Secundario 2</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
           <td>Raul</td>
           <td>Paul</td>
           <td>Perez</td>
           <td>Sobrado</td>
           <td>090912222</td>
           <td>99209920</td>
           <td>sobrado@gmail.com</td>
           <td>PAM</td>
           <td>Ninguno</td>
          </tr>
        </tbody>
      </table>
      </DefaultLayout>
    )

}