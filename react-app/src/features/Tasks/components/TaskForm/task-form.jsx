import { InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, ModalBody, ModalFooter } from "reactstrap";
import projectAPI from "../../../../api/project.api";
import taskAPI from "../../../../api/task-api";
import userApi from "../../../../api/user-api";
import InputField from "../../../../components/Controls/InputField/input-field";
import PropTypes from "prop-types";

TaskForm.propTypes = {
    onSubmitTaskForm: PropTypes.func,
};

function TaskForm(props) {
    const { onSubmitTaskForm } = props;
    const [listUser, setListUser] = useState([]);
    const [listTaskPriorities, setListTaskPriorities] = useState([]);
    const [listProject, setListProject] = useState([]);
    const form = useForm({
        defaultValues: {
            assignedTo: "",
            assignedToUser: {},
            createdBy: "",
            createdByUser: {},
            createdOn: new Date(Date.now()),
            createdOnString: "",
            currentStatus: "",
            currentTaskStatusID: 0,
            description: "",
            lastUpdatedOn: new Date(Date.now()),
            lastUpdatedOnString: "",
            project: {},
            projectID: 0,
            taskID: 0,
            taskName: "",
            taskPriority: {},
            taskPriorityID: 0,
            taskStatusDetails: [],
        },
    });

    useEffect(() => {
        async function getListUser() {
            const result = await userApi.getUsers();
            setListUser(result);
        }

        async function getListTaskPriorities() {
            const result = await taskAPI.getTaskPriorities();
            setListTaskPriorities(result);
        }

        async function getListProject() {
            const result = await projectAPI.getProjects();
            setListProject(result);
        }

        getListUser();
        getListTaskPriorities();
        getListProject();
    }, [listUser, listTaskPriorities, listProject]);

    const onHandleSubmit = (value) => {
        if (onSubmitTaskForm) {
            onSubmitTaskForm(value);
        }
    };
    return (
        <form onSubmit={form.handleSubmit(onHandleSubmit)}>
            <ModalBody>
                <InputField
                    form={form}
                    label="Task Name"
                    fieldName="taskName"
                    type="text"
                ></InputField>
                <InputField
                    form={form}
                    label="Description"
                    fieldName="description"
                    type="text"
                ></InputField>
                <Controller
                    control={form.control}
                    name="projectID"
                    render={({ field }) => (
                        <FormControl
                            sx={{ m: 1, width: "50ch" }}
                            variant="outlined"
                        >
                            <InputLabel htmlFor="outlined-adornment-password">
                                Project
                            </InputLabel>
                            <Select label="Project" {...field}>
                                {listProject.map((item) => {
                                    return (
                                        <MenuItem
                                            value={item.projectID}
                                            key={item.projectID}
                                        >
                                            {item.projectName}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    )}
                />
                <Controller
                    control={form.control}
                    name="taskPriorityID"
                    render={({ field }) => (
                        <FormControl
                            sx={{ m: 1, width: "50ch" }}
                            variant="outlined"
                        >
                            <InputLabel htmlFor="outlined-adornment-password">
                                Task Priority
                            </InputLabel>
                            <Select label="Task Priority" {...field}>
                                {listTaskPriorities.map((item) => {
                                    return (
                                        <MenuItem
                                            value={item.taskPriorityID}
                                            key={item.taskPriorityID}
                                        >
                                            {item.taskPriorityName}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    )}
                />
                <Controller
                    control={form.control}
                    name="assignedTo"
                    render={({ field }) => (
                        <FormControl
                            sx={{ m: 1, width: "50ch" }}
                            variant="outlined"
                        >
                            <InputLabel htmlFor="outlined-adornment-password">
                                User
                            </InputLabel>
                            <Select label="User" {...field}>
                                {listUser.map((item) => {
                                    return (
                                        <MenuItem value={item.id} key={item.id}>
                                            {item.email}
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

export default TaskForm;
