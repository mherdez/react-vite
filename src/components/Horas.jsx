import '../stylesheets/Horas.css';

function Horas({ hrs, handdleChange }) {
	return (
		<div>
			<input
				type='range'
				name=''
				id=''
				min={0}
				max={23}
				onChange={handdleChange}
				value={hrs}
				className='input-range'
			/>
			<div className='horario-seleccion-horas'>
				<p className='horas hora3'>
					{hrs - 3 >= 0 ? hrs - 3 : null}
				</p>
				<p className='horas hora2'>
					{hrs - 2 >= 0 ? hrs - 2 : null}
				</p>
				<p className='horas hora1'>
					{hrs - 1 >= 0 ? hrs - 1 : null}
				</p>
				<p className='horas hora0'>{hrs}</p>
				<p className='horas hora1'>
					{hrs + 1 <= 23 ? hrs + 1 : null}
				</p>
				<p className='horas hora2'>
					{hrs + 2 <= 23 ? hrs + 2 : null}
				</p>
				<p className='horas hora3'>
					{hrs + 3 <= 23 ? hrs + 3 : null}
				</p>
			</div>
		</div>
	);
}

export default Horas;
