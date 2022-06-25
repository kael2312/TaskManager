import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import InputField from "../../../../components/Controls/InputField/input-field";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import clientLocationAPI from "../../../../api/clientLocation-api";
import { Controller } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { OutlinedInput, InputLabel } from "@mui/material";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

ProjectForm.propTypes = {
    onSubmitProjectForm: PropTypes.func,
    editProject: PropTypes.object
};

function ProjectForm(props) {
    const { onSubmitProjectForm, editProject } = props;
    const [locationList, setLocationList] = useState([]);
    const form = useForm({
        defaultValues: {
            projectID: 0 | editProject.projectID,
            projectName: "" | editProject.projectName,
            dateOfStart: "2022-06-25T04:14:20.198Z",
            teamSize: 0 | editProject.teamSize,
            active: true,
            status: "In Force" | editProject.status,
            clientLocationID: 0 | editProject.clientLocationID,
            clientLocation: {},
        },
    });

    useEffect(() => {
        if (editProject) {
            form.reset(editProject)
        }
    }, [editProject, form])


    const onHandleSubmit = (value) => {
        if (onSubmitProjectForm) {
            onSubmitProjectForm(value);
        }
    };

    useEffect(() => {
        async function getListLocation() {
            const result = await clientLocationAPI.getLocation();
            setLocationList(result);
        }
        getListLocation();
    }, [locationList]);
    return (
        <form onSubmit={form.handleSubmit(onHandleSubmit)}>
            <ModalBody>
                <InputField
                    form={form}
                    label="Project ID"
                    fieldName="projectID"
                    type="number"
                ></InputField>
                <InputField
                    form={form}
                    label="Project Name"
                    fieldName="projectName"
                    type="text"
                ></InputField>
                <InputField
                    form={form}
                    label="Team Size"
                    fieldName="teamSize"
                    type="number"
                ></InputField>
                <Controller
                    className="ml-3"
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                        <FormControl style={{marginLeft: "13px"}} >
                            <FormLabel id="demo-row-radio-buttons-group-label">
                                Status
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="status"
                                {...field}
                            >
                                <FormControlLabel
                                    value="In Force"
                                    control={<Radio />}
                                    label="In Force"
                                />
                                <FormControlLabel
                                    value="Support"
                                    control={<Radio />}
                                    label="Support"
                                />
                            </RadioGroup>
                        </FormControl>
                    )}
                />
                <Controller
                    control={form.control}
                    name="clientLocationID"
                    render={({ field }) => (
                        <FormControl
                            sx={{ m: 1, width: "50ch" }}
                            variant="outlined"
                        >
                            <InputLabel htmlFor="outlined-adornment-password">
                                Client Location
                            </InputLabel>
                            <Select label="Client Location" {...field}>
                                <MenuItem selected value={0}>
                                    Choose Location
                                </MenuItem>
                                {locationList.map((item) => {
                                    return (
                                        <MenuItem
                                            value={item.clientLocationID}
                                            key={item.clientLocationID}
                                        >
                                            {item.clientLocationName}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    )}
                />
            </ModalBody>
            <ModalFooter>
                <Button type="submit" color="primary">
                    Submit
                </Button>
            </ModalFooter>
        </form>
    );
}

export default ProjectForm;
