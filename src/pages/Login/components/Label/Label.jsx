import React from 'react';
import Login from '../../Login';


const Label = ({ text }) => {
    return (
        <div className='title-container'>
            <label className='title-label'> {text} </label>
        </div>
    )
};


export default Label;