import React, { useState } from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string,
};

function PasswordField(props) {
    const { form, fieldName, label } = props;
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((x) => !x);
    };

    return (
        <div>
            <Controller
                name={fieldName}
                control={form.control}
                render={({ field }) => (
                    <FormControl
                        sx={{ m: 1, width: "50ch" }}
                        variant="outlined"
                    >
                        <InputLabel htmlFor="outlined-adornment-password">
                            {label}
                        </InputLabel>
                        <OutlinedInput
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label={label}
                            {...field}
                        />
                    </FormControl>
                )}
            />
        </div>
    );
}

export default PasswordField;
