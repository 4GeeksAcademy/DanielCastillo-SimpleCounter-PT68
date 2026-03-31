import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Clock = ({ segundos }) => {

    const sexta = Math.floor(segundos / 100000) % 10;
    const quinta = Math.floor(segundos / 10000) % 10;
    const cuarta = Math.floor(segundos / 1000) % 10;
    const tercera = Math.floor(segundos / 100) % 10;
    const segunda = Math.floor(segundos / 10) % 10;
    const primera = Math.floor (segundos % 10);


    return (
        <div className="reloj d-flex justify-content-center align-items-center">
            <p className="relojicon"><FontAwesomeIcon icon={faClock} /></p>
            <p className="numeros">{sexta}</p>
            <p className="numeros">{quinta}</p>
            <p className="numeros">{cuarta}</p>
            <p className="numeros">{tercera}</p>
            <p className="numeros">{segunda}</p>
            <p className="numeros">{primera}</p>
            
        </div>
    )
}
export default Clock;