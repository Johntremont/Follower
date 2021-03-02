import React, { useState } from 'react';
import './Login.css'
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Imput from './components/Imput/Imput';



const Login = () => {

	const [ user, setUser ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ passwordError, setPasswordError ] = useState(false);
	const [ isLogin, setIsLogin ] = useState(false);

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

	function ifMatch(param) {
		console.log('ifMatch')
		if(param.user.length > 0 && param.password.length > 0) {
			console.log(param)
			if(param.user === "carolina" && param.password === '123456') {
				const {  user, password } = param;
				let ac = { user, password };
				let account = JSON.stringify(ac);
				localStorage.setItem('account', account);
				setIsLogin(true);
				console.log(localStorage);
			} else {
				setIsLogin(false);
			}
		}	else {
			setIsLogin(false);
		}
	}

	function handleSubmit() {
		let account = { user, password }
		if(account) {
			ifMatch(account);
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
			{  passwordError &&
				<label className='label-error'>
					Contraseña invalida o imcompleta
				</label>
			}
			<button onClick={handleSubmit }>
				Ingresar
			</button>
				
		</div>
	)
};

export default Login;