import React, { FunctionComponentElement } from 'react'
import logo from './logo.svg'
import './App.css'

function App(): FunctionComponentElement<null> {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Hello World!</h1>
				<div>{`We are using node ${process.versions.node}`}</div>
				<div>{`Chrome ${process.versions.chrome}`}</div>
				<div>{`and Electron ${process.versions.electron}.`}</div>
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					{'Edit '}
					<code>{'src/App.js'}</code>
					{' and save to reload.'}
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
