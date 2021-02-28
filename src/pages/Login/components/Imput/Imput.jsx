import React from 'react';
import './Imput.css';


const Imput = ({ attribute, handleChange, param }) => {
    return (
        <div className='imput-container'>
            <input 
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            onChange={ (e) => handleChange(e.target.name, e.target.value) }
            className={ param ? 'imput-error' : 'regular-style'}
            />
        </div>
    )
};

export default Imput;