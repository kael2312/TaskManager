import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm/login-form';
import { useDispatch } from "react-redux";
import { login } from '../../authSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigate } from "react-router-dom";


LoginPage.propTypes = {
    
};

function LoginPage(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmitLoginForm = async (value) => {
        try {
            const user = await dispatch(login(value))
            const result = unwrapResult(user)
            if (result.role === 'Admin') {
                navigate('../project')
            }

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <LoginForm onSubmitLoginForm={onSubmitLoginForm}></LoginForm>
        </div>
    );
}

export default LoginPage;