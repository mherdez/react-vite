import '../stylesheets/Minutos.css';

function Minutos({ min, handdleChange, step }) {
	return (
		<div>
			<div className='horario-seleccion-minutos'>
				<p className='minutos minuto3'>
					{min - step * 3 >= 0 ? min - step * 3 : null}
				</p>
				<p className='minutos minuto2'>
					{min - step * 2 >= 0 ? min - step * 2 : null}
				</p>
				<p className='minutos minuto1'>
					{min - step * 1 >= 0 ? min - step * 1 : null}
				</p>
				<p className='minutos minuto0'>{min}</p>
				<p className='minutos minuto1'>
					{min + step * 1 <= 59 ? min + step * 1 : null}
				</p>
				<p className='minutos minuto2'>
					{min + step * 2 <= 59 ? min + step * 2 : null}
				</p>
				<p className='minutos minuto3'>
					{min + step * 3 <= 59 ? min + step * 3 : null}
				</p>
			</div>
			<input
				type='range'
				name=''
				id=''
				min={0}
				max={60 - step}
				step={step}
				onChange={handdleChange}
				value={min}
				className='input-range'
			/>
		</div>
	);
}

export default Minutos;
