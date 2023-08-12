import React from 'react';

function Button(props) {
	return (
		<button type='submit' onClick={props.onClick}>
			{props.buttonText}
		</button>
	);
}

export default Button;
