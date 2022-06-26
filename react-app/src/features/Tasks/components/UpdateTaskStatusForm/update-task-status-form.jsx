import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Table,
} from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import InputField from "../../../../components/Controls/InputField/input-field";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import taskAPI from "../../../../api/task-api";

UpdateTaskStatusForm.propTypes = {
    taskDetailID: PropTypes.number,
    onSubmitChangeTaskStatus: PropTypes.func
};

function UpdateTaskStatusForm(props) {
    const { taskDetailID, onSubmitChangeTaskStatus  } = props
    const [listTaskStatuses, setListTaskStatuses] = useState([]);

    const onChangeTaskStatus = (value) => {
        if (onSubmitChangeTaskStatus) {
            onSubmitChangeTaskStatus(value)
        }
    };


    useEffect(() => {
        async function getListTaskStatuses() {
            const result = await taskAPI.getTaskStatuses();
            setListTaskStatuses(result);
        }
        getListTaskStatuses();
    }, [listTaskStatuses]);

    const form = useForm({
        defaultValues: {
            taskStatusDetailID: 0,
            taskID: 0,
            taskStatusID: 0,
            userID: "",
            description: "",
            taskstatus: {},
            statusUpdationDateTime: new Date(Date.now()),
            statsUpdationDateTimeString: "",
        },
    });
    return (
        <form onSubmit={form.handleSubmit(onChangeTaskStatus)}>
            <ModalBody>
                <InputField
                    form={form}
                    label="Description"
                    fieldName="description"
                    type="text"
                ></InputField>
                <Controller
                    control={form.control}
                    name="taskStatusID"
                    render={({ field }) => (
                        <FormControl
                            sx={{ m: 1, width: "50ch" }}
                            variant="outlined"
                        >
                            <InputLabel htmlFor="outlined-adornment-password">
                                Status
                            </InputLabel>
                            <Select label="Status" {...field}>
                                <MenuItem selected value={0}>
                                    Choose Status
                                </MenuItem>
                                {listTaskStatuses.map((item) => {
                                    return (
                                        <MenuItem
                                            value={item.taskStatusID}
                                            key={item.taskStatusID}
                                        >
                                            {item.taskStatusName}
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

export default UpdateTaskStatusForm;
