import { useState } from 'react';

import '../stylesheets/Horario.css';
import Minutos from './Minutos';
import Horas from './Horas';
import ImagenTime from './ImagenTime';

function Horario({ inicio = 9 }) {
	const [hrs, setHrs] = useState(inicio);
	const [min, setMin] = useState(0);

	let horarioTexto = hrs < 10 ? `0${hrs}` : hrs;
	horarioTexto += ':';
	horarioTexto += min < 10 ? `0${min}` : min;

	const handdleChangeHrs = (e) => {
		setHrs(e.target.value * 1);
	};
	const handdleChangeMin = (e) => {
		setMin(e.target.value * 1);
	};

	return (
		<div className='horario-contenedor'>
			<div className='horario-superior-contenedor'>
				<ImagenTime hrs={hrs} />
				<p className='horario-final'>
					<span>Time</span> {hrs < 10 ? '0' : ''}
					{hrs} : {min < 10 ? '0' : ''}
					{min}
				</p>
			</div>
			<div className='horario-seleccion-contenedor'>
				<Horas hrs={hrs} handdleChange={handdleChangeHrs} />
				<Minutos min={min} handdleChange={handdleChangeMin} />
			</div>
		</div>
	);
}

export default Horario;
