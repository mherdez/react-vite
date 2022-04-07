import '../stylesheets/Horario.css';
import morning from '../assets/images/morning.png';

function Horario() {
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
				<p className='horario-seleccion-minutos'>2</p>
			</div>
		</div>
	);
}

export default Horario;
