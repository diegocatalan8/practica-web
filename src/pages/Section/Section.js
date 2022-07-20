import "./Section.css";
import { useState, useEffect } from "react";


export default function Section() {

    useEffect(() => {
        setTimeout(() => {
            setEstado(false)
        }, 6000);
    }, [])

    const [estado, setEstado] = useState(true);


    let claseP = estado ? "positivo" : "negativo";


    return (
       <section className="main-section">
            <p className={claseP}><small>Presione el boton contacto para ver el formulario 👆</small></p>
            <figure className="image-section">
            <img src="https://latenightdevelopment.com/wp-content/uploads/2021/08/photo-1542831371-29b0f74f9713.jpeg" alt="Cursos"/>
                <figcaption className="description">Cursos en linea de programación</figcaption>
            </figure>
           
       </section>
    );
}