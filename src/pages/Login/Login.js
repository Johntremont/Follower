import React, { useState } from 'react';
import './Login.css'
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Imput from './components/Imput/Imput';



const Login = () => {

	const [ user, setUser ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ passwordError, setPasswordError ] = useState(false);

	function handleChange(name, value) {
		if(name === 'usuario') {
			setUser(value)
		} else {
			if(value.length < 6) {
				setPasswordError(true);
			} else {
				setPasswordError(false);
				setPassword(value)
			}
		}
	};

	function handleSubmit() {
		let account = { user, password }
		if(account) {
			console.log('account', account)
		}
	};

	return (
		<div className='login-container'>
			<Title text='FOLLOWER' />
			<Label text='usuario'/>
			<Imput 
			attribute={{
				id: 'usuario',
				name: 'usuario',
				type: 'text',
				placeholder: 'Ingrese usuario'
			}}
			handleChange={handleChange}
			/>
			<Label text='Contraseña'/>
			<Imput 
			attribute={{
				id: 'Contraseña',
				name: 'Contraseña',
				type: 'password',
				placeholder: 'Ingrese su Contraseña'
			}}
			handleChange={handleChange}
			param={passwordError}
			/>
			<button onClick={handleSubmit }>
				Ingresar
			</button>
				
		</div>
	)
};

export default Login;