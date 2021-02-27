import React, { useState } from 'react';
import './Login.css'
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Imput from './components/Imput/Imput';



const Login = () => {

	const [ user, setUser ] = useState('');


	function handleChange(name, value) {
		if(name === 'usuario') {
			setUser(value)
		}
	}

	console.log('usuario:', user)

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
			{/*<Imput />*/}
				
		</div>
	)
};

export default Login;