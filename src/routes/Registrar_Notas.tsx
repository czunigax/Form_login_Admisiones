import DefaultLayout from "../Layout/DefaultLayout";
import React, { useState } from "react";
//import csv from "csv-parser";

interface CSVData {
    id: string;
    tipoExamen: string;
    nota: string;
  }
export default function Registrar_Notas (){

    const [tableData, setTableData] = useState<CSVData[]>([]);
   // const [errorMessage, setErrorMessage] = useState<string | null>(null);


   const isCSVValid = (csvData: string): boolean => {
    // Dividir el CSV en filas
    const rows = csvData.split(/\r\n|\n|\r/);
  
    // Validar que todas las filas contienen tres columnas
    for (const row of rows) {
      const columns = row.split(",");
      if (columns.length == 3) {
        return true; // Si alguna fila no tiene tres columnas, el formato no es válido
      }
    }
  
    // Si todas las filas tienen tres columnas, el formato es válido
    return false;
  };

    
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files && event.target.files[0];
      if (file) {
        const reader = new FileReader();
    
        reader.onload = (e) => {
          if (e.target) {
            const csvData = e.target.result as string;
            
            // Verificar que el archivo CSV tenga tres columnas
            if (!isCSVValid(csvData)) {
              // Si el archivo CSV no es válido, no deberia procesar
              alert("El archivo CSV no tiene el formato correcto (tres columnas).");
              return; 
            } else {
              // Si el archivo CSV  es válido, procesa
              parseCSVData(csvData);
            }
          }
        };
    
        reader.readAsText(file);
      }
    };
    
 



            const parseCSVData = (csvData: string) => {
                const parsedData:CSVData[]=[];
            
                csvData
                  .split("\n")
                  .filter((line) => line.trim() !== "")
                  .forEach((line) => {
                    const [id, tipoExamen, nota] = line.split(",");
                    parsedData.push({ id, tipoExamen, nota });
                  });
            
                setTableData(parsedData);
              };


return(
    <DefaultLayout>
    <h1>Ingresar Notas</h1>
    <input type="file" accept=".csv" onChange={handleFileUpload} />
    <table>
    <thead>
      <tr>
        <th>ID De Estudiante</th>
        <th>Tipo De Examen</th>
        <th>Nota</th>
      </tr>
    </thead>
    <tbody>
    {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.tipoExamen}</td>
              <td>{data.nota}</td>
            </tr>
          ))}
    </tbody>
  </table>
  </DefaultLayout>
)
}