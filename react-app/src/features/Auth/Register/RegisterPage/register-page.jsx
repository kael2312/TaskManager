import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm/register-form';
import { useDispatch } from 'react-redux';
import { register } from '../../authSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigate } from "react-router-dom";



RegisterPage.propTypes = {
    
};

function RegisterPage(props) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmitRegisterForm = async (value) => {
        try {
            const user = await dispatch(register(value))
            const result = unwrapResult(user)
            if (result.role === 'Member') {
                navigate('../tasks')
            }
        } catch (error) {
            
        }
    }
    return (
        <div>
            <RegisterForm onSubmitRegisterForm = {onSubmitRegisterForm}></RegisterForm>
        </div>
    );
}

export default RegisterPage;