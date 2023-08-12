import React, { useState } from 'react';
import Logo from './components/Logo/Logo';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import styles from './Header.css';

const Header = (props) => {
	const [userName, setUserName] = useState(props.name); //add state for name value and set default value
	const [isAuthorized, setIsAuthorized] = useState(props.auth); // add state for authorization value and set default value
	const handleButtonClick = () => {
		if (isAuthorized) {
			setIsAuthorized(false); // set a new value for isAuthorized
			setUserName('Anonym'); // set a new value for userName
		}
	};
	return (
		<div>
			<header className={styles.header}>
				<div className={styles.logo}>
					<Logo alt='Logo' />
				</div>
				<Input />
				<span>{userName}</span>
				<Button
					onClick={handleButtonClick}
					buttonText={isAuthorized ? 'Logout' : 'Login'}
				/>
			</header>
		</div>
	);
};

export default Header;
