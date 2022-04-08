import '../stylesheets/Buttons.css';
import { FaCheck, FaTimes } from 'react-icons/fa';

function Buttons() {
	return (
		<div className='form-buttons'>
			<button>
				<FaTimes className='form-icons' />
			</button>
			<button>
				<FaCheck className='form-icons' />
			</button>
		</div>
	);
}

export default Buttons;
