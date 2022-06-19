import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import InputField from '../../../../components/Controls/InputField/input-field';
import PasswordField from '../../../../components/Controls/PasswordField/password-field';
import { Button } from '@mui/material';

RegisterForm.propTypes = {
    onSubmitRegisterForm: PropTypes.func
};

function RegisterForm(props) {
    const { onSubmitRegisterForm } = props
    const form = useForm({
        defaultValues: {
            personName: {
                firstName: '',
                lastName: ''
            },
            password: '',
            confirmPassword: '',
            email: '',
            mobile: '',
            dateOfBirth: '1989-06-07',
            gender: 'male',
            countryID: 12,
            receiveNewsLetters: true,
            skills: []
        }
    })

    const onHandleSubmit = (value) => {
        if(onSubmitRegisterForm){
            onSubmitRegisterForm(value)
        }
    }
    return (
        <div>
            <form onSubmit={form.handleSubmit(onHandleSubmit)}>
                <InputField form={form} fieldName="personName.firstName" label="First Name" ></InputField>
                <InputField form={form} fieldName="personName.lastName" label="Last Name" ></InputField>
                <PasswordField form={form} fieldName="password" label="Password"></PasswordField>
                <PasswordField form={form} fieldName="confirmPassword" label="Confirm Password"></PasswordField>
                <InputField form={form} fieldName="email" label="Email" ></InputField>
                <InputField form={form} fieldName="mobile" label="Mobile" ></InputField>

                <Button type="submit" variant="contained">
                    Register
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;