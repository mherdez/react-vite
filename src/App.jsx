import './stylesheets/App.css';
import Titulo from './components/Titulo';
import Horario from './components/Horario';

function App() {
	return (
		<div className='principal-contenedor'>
			<div className='todo-contenedor'>
				<Titulo titulo='Todo List v1.0' />
				<Horario />
			</div>
		</div>
	);
}

export default App;
