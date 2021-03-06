import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { OutlinedInput, InputLabel, FormControl } from "@mui/material";

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.string
};

function InputField(props) {
    const { form, fieldName, label, type } = props;

    return (
        <div>
            <Controller
                control={form.control}
                name={fieldName}
                render={({ field }) => (
                    <FormControl
                        sx={{ m: 1, width: "50ch" }}
                        variant="outlined"
                    >
                        <InputLabel htmlFor="outlined-adornment-password">
                            {label}
                        </InputLabel>
                        <OutlinedInput
                            label={label}
                            {...field}
                            type={type}
                        />

                    </FormControl>
                )}
            />
        </div>
    );
}

export default InputField;
