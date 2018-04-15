import React from 'react';

function Input({name, placeholder, type, className}) {
    return (
        <div className="form-group">
            <input className={className} type={type} placeholder={placeholder} name={name}/>
        </div>
        
    );
}

export default Input;