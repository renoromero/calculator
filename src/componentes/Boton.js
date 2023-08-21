
import '../style/Boton.css';

function Boton(props) {

    const esOperador= valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return(
        <div
            className={`botonContenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>
            {props.children}
        </div>
    );
}

export default Boton;