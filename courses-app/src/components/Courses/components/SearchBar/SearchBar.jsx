import React, { useState } from 'react';

function SearchBar() {
	const [nameValue, setNameValue] = useState('');

	const handleChange = (event) => {
		setNameValue(event.target.value);
	};

	const handleSubmit = (event) => {
		alert('A name was submitted: ' + nameValue);
		event.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Search:
				<input type='text' value={nameValue} onChange={handleChange} />
			</label>
			<input type='submit' value='Submit' />
		</form>
	);
}

export default SearchBar;
