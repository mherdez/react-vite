import '../stylesheets/Formulario.css';
import Horario from './Horario';
import DescripcionTarea from './DescripcionTarea';
import Prioridad from './Prioridad';
import Buttons from './Buttons';
import { useState } from 'react';

function Formulario() {
	// const [hora, setHora] = useState()

	return (
		<div className='formulario-contenedor'>
			<div className='formulario-contenedor-datos'>
				<Horario />
				<DescripcionTarea />
				<Prioridad />
			</div>
			<Buttons />
		</div>
	);
}

export default Formulario;
