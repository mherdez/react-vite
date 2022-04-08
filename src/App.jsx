import './stylesheets/App.css';
import Titulo from './components/Titulo';
import Referencia from './components/Referencia';
import Formulario from './components/Formulario';

function App() {
	return (
		<div className='principal-contenedor'>
			<div className='todo-contenedor'>
				<Titulo titulo='Todo List v1.0' />
				<div className='temporal'>
					<Referencia />
					<Formulario />
				</div>
			</div>
		</div>
	);
}

export default App;
