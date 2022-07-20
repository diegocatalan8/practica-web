import "./Header.css";
import { Link } from "wouter";


export default function Header() {
    return (
        <header className="main-header">
            
            
            <div className="logo-container">
                <h2>UMG</h2>
            
            </div>

            <nav className="nav-bar">
                <ul className="list-content">
                    <li>Inicio</li>
                    <li>Cursos</li>
                    <li>Tutoriales</li>
                   <Link href="/contacto"><li>Contacto</li></Link> 

                </ul>
            </nav>

        
        
        </header>
    );
}