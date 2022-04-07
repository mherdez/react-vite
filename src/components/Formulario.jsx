import '../stylesheets/Formulario.css';

function Formulario() {
	return (
		<div className='formulario-contenedor'>
			<input
				type='text'
				className='formulario-input'
				onChange={() => {}}
			/>
			<button className='formulario-button'>
				Agregar tarea
			</button>
		</div>
	);
}

export default Formulario;
