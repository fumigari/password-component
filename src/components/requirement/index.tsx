import Icon from '../basic-components/icon';
import Text from '../basic-components/text';
import './index.css';

const Requirement = ({ text, changeIcon } : { text: string, changeIcon: boolean}) => {
	return (
		<div className="requirement">
			<Icon changeIcon={changeIcon}/>
			<Text text={text}/>
		</div>
	)
}

export default Requirement;