import '../stylesheets/Minutos.css';

function Minutos({ min, handdleChange }) {
	return (
		<div>
			<div className='horario-seleccion-minutos'>
				<p className='minutos minuto2'>{min - 2 >= 0 ? min - 2 : null}</p>
				<p className='minutos minuto1'>{min - 1 >= 0 ? min - 1 : null}</p>
				<p className='minutos minuto0'>{min}</p>
				<p className='minutos minuto1'>{min + 1 <= 59 ? min + 1 : null}</p>
				<p className='minutos minuto2'>{min + 2 <= 59 ? min + 2 : null}</p>
			</div>
			<input
				type='range'
				name=''
				id=''
				min={0}
				max={59}
				onChange={handdleChange}
				value={min}
				className='input-range'
			/>
		</div>
	);
}

export default Minutos;
