import "./Form.css"
export default function Form() {
    return (
        <div className="container-form">
            <h1 className="titulo">Contactos</h1>
            <form className="formulario">
                <p>
                    <label for="name">Nombre:</label>
                    <input type="text" name="name"  id= "name"/>
                </p>
                <p>
                    <label for="email">Email:</label>
                    <input type="text" name="email" id="email" />
                </p>
                <p>
                    <label for="telefono">Telefono:</label>
                    <input type="text" name="telefono"  id="telefono"/>
                </p>
                <button type="button" className="btn">Enviar</button>
            </form>

            <div className="footer"> Practica #1 HTML Y CSS </div>
        </div>
    );
}