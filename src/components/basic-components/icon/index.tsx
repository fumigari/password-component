import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ changeIcon, id } : { changeIcon: boolean, id: string}) => {
	return (
		<>
		{changeIcon ? <FontAwesomeIcon id={id} title="check" icon={faCircleCheck} size="2xl" style={{color: "#0ba815",}} /> 
			: <FontAwesomeIcon id={id} title="xmark" icon={faCircleXmark} size="2xl" style={{color: "#e83b3b",}} />}
		</>
	);
};

export default Icon;