import React, { useState } from 'react';
import './Login.css'
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Imput from './components/Imput/Imput';



const Login = () => {

	const [ user, setUser ] = useState('');
	const [ password, setPassword ] = useState('');

	function handleChange(name, value) {
		if(name === 'usuario') {
			setUser(value)
		} else {
			setPassword(value)
		}
	}


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
			/>
			<Label text='Contraseña'/>
				
		</div>
	)
};

export default Login;