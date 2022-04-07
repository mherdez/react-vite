import '../stylesheets/Horario.css';
import morning from '../assets/images/morning.png';
import { useState } from 'react';

function Horario() {
	const [min, setMin] = useState(10);
	// let minutos = [];

	// for (let i = 0; i < 60; i++) {
	// 	minutos.push(i < 10 ? '0' + i : i);
	// }

	const handdleChange = (e) => {
		setMin(e.target.value);
	};

	return (
		<div className='horario-contenedor'>
			<div className='horario-superior-contenedor'>
				<img
					className='horario-imagen'
					src={morning}
					alt=''
				/>
				<p className='horario-final'>
					<span>Time</span> 09 : 27
				</p>
			</div>
			<div className='horario-seleccion-contenedor'>
				<p className='horario-seleccion-horas'>1</p>
				<p>{min}</p>
				<input
					type='range'
					name=''
					id=''
					min={0}
					max={59}
					onChange={handdleChange}
					value={min}
				/>
			</div>
		</div>
	);
}

export default Horario;
