import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { OutlinedInput, InputLabel, FormControl } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';

SelectField.propTypes = {
    form: PropTypes.object.isRequired,
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string,
    data: PropTypes.array,
};

function SelectField(props) {
    const { form, fieldName, label, data } = props;
    console.log(data);

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
                        <Select
                            label={label}
                            {...field}
                        >
                            {
                                data.map(item => {
                                   return <MenuItem value={item.clientLocationID} key={item.clientLocationID}>{item.clientLocationName}</MenuItem>
                                })
                            }                         
                        </Select>
                    </FormControl>
                )}
            />
        </div>
    );
}

export default SelectField;
