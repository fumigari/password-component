import Icon from '../basic-components/icon';
import Text from '../basic-components/text';
import './index.css';

const Requirement = ({ text, id, changeIcon } : { text: string, id: string, changeIcon: boolean}) => {
	return (
		<div className="requirement" data-testid={id}>
			<Icon id={id} changeIcon={changeIcon}/>
			<Text text={text}/>
		</div>
	)
}

export default Requirement;