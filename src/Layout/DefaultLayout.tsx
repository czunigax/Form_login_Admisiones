import { Link } from "react-router-dom";
import   '../routes/Admisiones_Clasificacion';
import   '../routes/Registrar_Notas';
interface DefaultLayoutProps{
    children: React.ReactNode
}
export default function DefaultLayout({children}:DefaultLayoutProps){

return(
<>
<header>
    <nav>
        <ul>
            <li>
                <Link to = "/">Pagina Principal</Link>
            </li>
            <li>
                <Link to = "/SingUp">Admisiones</Link>
            </li>
            <li>
                <Link to = "/SingUp">Administracion</Link>
                </li>
                <li>
                <Link to = "/Admisiones_Clasificacion">Clasificacion</Link>
            </li>
            <li>
                <Link to = "/Registrar_Notas">Registrar Notas</Link>
            </li>
            
        </ul>
    </nav>
</header>
<main>
    {children}
</main>

</>

)


}