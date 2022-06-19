import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/Controls/InputField/input-field";
import PasswordField from "../../../../components/Controls/PasswordField/password-field";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

LoginForm.propTypes = {
    onSubmitLoginForm: PropTypes.func,
};

function LoginForm(props) {
    const { onSubmitLoginForm } = props;
    const form = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const onHandleSubmit = (value) => {
        if (onSubmitLoginForm) {
            onSubmitLoginForm(value);
        }
    };
    return (
        <div className="login-form">
            <form onSubmit={form.handleSubmit(onHandleSubmit)}>
                <InputField
                    form={form}
                    fieldName="username"
                    label="Username"
                ></InputField>
                <PasswordField
                    form={form}
                    fieldName="password"
                    label="Password"
                ></PasswordField>
                <Button type="submit" variant="contained">
                    Login
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;
