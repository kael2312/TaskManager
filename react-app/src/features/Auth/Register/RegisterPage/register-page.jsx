import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm/register-form';

RegisterPage.propTypes = {
    
};

function RegisterPage(props) {

    const onSubmitRegisterForm = (value) => {
        console.log(value);
    }
    return (
        <div>
            <RegisterForm onSubmitRegisterForm = {onSubmitRegisterForm}></RegisterForm>
        </div>
    );
}

export default RegisterPage;