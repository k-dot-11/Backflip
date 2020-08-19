import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [ message, setMessage ] = useState('Fetching');
	const [userMessage , setUserMessage] = useState('No new message')

	useEffect(() => {
		fetch('http://localhost:9000/testAPI').then((res) => res.text()).then((res) => setMessage(res));
	}, []);

	const postRequest = async (e) => {
		e.preventDefault();
		var getMsg = prompt('Enter your message')
		const response = await fetch('http://localhost:9000/testAPI/messages', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ post: getMsg })
		});
		const body = await response.text();
		setUserMessage(body);
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<p>{message}</p>
				<button onClick={postRequest}>Submit</button>
				<p>{userMessage}</p>

			</header>
		</div>
	);
}

export default App;
