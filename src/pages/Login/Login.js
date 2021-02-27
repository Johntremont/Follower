import React from 'react';
import './Login.css'
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Imput from './components/Imput/Imput';

const Login = () => {
    return (
        <div className='login-container'>
            <Title text='soy un titulo' />
            <Label text='Usuario'/>
            <Imput />
            <Label text='Contraseña'/>
            <Imput />
            
        </div>
    )
};

export default Login;