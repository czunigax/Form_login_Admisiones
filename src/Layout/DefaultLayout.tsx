import { Link } from "react-router-dom";
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
        </ul>
    </nav>
</header>
<main>
    {children}
</main>

</>

)


}