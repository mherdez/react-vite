import '../stylesheets/Formulario.css';
import Horario from './Horario';
import { FaCheck, FaTimes } from 'react-icons/fa';

function Formulario() {
	return (
		<div className='formulario-contenedor'>
			<div className='formulario-contenedor-datos'>
				<Horario />
				<textarea
					name=''
					id=''
					cols='30'
					rows='4'
					className='form-textarea'
					placeholder='Nueva tarea...'
				></textarea>
				<div className='form-prioridad'>
					<div className='form-prior-normal'>Normal</div>
					{/* <div className='form-prior-urgente'>Urgente</div> */}
					<div className='form-prior-urgente'>Urgente</div>
				</div>
			</div>
			<div className='form-buttons'>
				<button>
					<FaTimes className='form-icons' />
				</button>
				<button>
					<FaCheck className='form-icons' />
				</button>
			</div>
		</div>
	);
}

export default Formulario;
