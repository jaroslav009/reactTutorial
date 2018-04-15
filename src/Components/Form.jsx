import React from 'react';
import Input from './Input';

function Form() {
    return (
        <form className="signUp">
            <div className="container">
                <h1>Sign Up</h1>
                <Input type="text" name="name" placeholder="Name" className="form-control"/>
                <Input type="password" name="password" placeholder="Password" className="form-control"/>
                <Input type="submit" name="submit" className="btn btn-primary"/>
            </div>
        </form>
    )
}

export default Form;