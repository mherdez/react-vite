import '../stylesheets/ImagenTime.css';
import morning from '../assets/images/morning.png';
import after from '../assets/images/after.png';
import nigth from '../assets/images/night.png';

function ImagenTime({ hrs }) {
	if (hrs >= 6 && hrs <= 12) {
		return <img className='horario-imagen' src={morning} alt={morning} />;
	}
	if (hrs >= 13 && hrs <= 19) {
		return <img className='horario-imagen' src={after} alt={after} />;
	}
	return <img className='horario-imagen' src={nigth} alt={nigth} />;
}

export default ImagenTime;
