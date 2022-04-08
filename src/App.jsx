import './stylesheets/App.css';
import Titulo from './components/Titulo';
import Horario from './components/Horario';
import Referencia from './components/Referencia';

function App() {
	return (
		<div className='principal-contenedor'>
			<div className='todo-contenedor'>
				<Titulo titulo='Todo List v1.0' />
				<div className='temporal'>
					<Referencia />
					<Horario inicio={12} />
				</div>
			</div>
		</div>
	);
}

export default App;
