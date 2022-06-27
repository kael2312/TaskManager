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
import {
    BsFillFilePersonFill,
    BsCalendar2Event,
    BsPersonCheckFill,
    BsBriefcaseFill,
    BsPencil,
} from "react-icons/bs";
import { useEffect, useState } from "react";
import taskAPI from "../../../../api/task-api";
import { Controller, useForm } from "react-hook-form";
import InputField from "../../../../components/Controls/InputField/input-field";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskStatus } from "../../taskSlice";
import UpdateTaskStatusForm from "../UpdateTaskStatusForm/update-task-status-form";

TaskItem.propTypes = {
    task: PropTypes.object,
};

function TaskItem(props) {
    const { task } = props;
    const [modal, setModal] = useState(false);
    const [taskDetailID, setTaskDetailID] = useState(0)
    const dispatch = useDispatch();

    const toggleUpdateTaskStatusForm = (taskDetailID) => {
        setTaskDetailID(taskDetailID)
        setModal(true);
    };

    const toggleModal = () => {
        setModal(!modal);
    };

    const onSubmitChangeTaskStatus = (value) => {
        const data = {
            ...value,
            taskID: taskDetailID
        }
        dispatch(updateTaskStatus(data))
        setModal(false);
    }

    const getTaskGroupBgCssClass = () => {
        switch (task?.taskStatusName) {
            case "Holding":
                return "bg-gray-800 text-white py-3";
            case "Prioritized":
                return "bg-blue-700 text-white py-3";
            case "Started":
                return "bg-violet-600 text-white py-3";
            case "Finished":
                return "bg-green-600 text-white py-3";
            case "Reverted":
                return "bg-red-700 text-white py-3";
            default:
                return "";
        }
    };

    const getTaskPriorityBadgeCssClass = (taskDetail) => {
        switch (taskDetail?.taskPriority?.taskPriorityName) {
            case "Urgent":
                return "bg-red-800 text-white py-1 px-2  rounded-lg";
            case "Normal":
                return "bg-blue-700 text-white py-1 px-2 rounded-lg";
            case "Below Normal":
                return "bg-violet-600 text-white py-1 px-2 rounded-lg";
            case "Low":
                return "bg-gray-600 text-white py-1 px-2 rounded-lg";
            default:
                return "";
        }
    };

    const getTaskGroupTextCssClass = (taskStatusDetail) => {
        switch (taskStatusDetail?.taskStatus?.taskStatusName) {
            case "Holding":
                return " text-gray-800 ";
            case "Prioritized":
                return "text-blue-700 ";
            case "Started":
                return "text-violet-600 ";
            case "Finished":
                return " text-green-600 ";
            case "Reverted":
                return " text-red-600 ";
            default:
                return "";
        }
    };

    return (
        <div>
            <Card>
                <div className={getTaskGroupBgCssClass()}>
                    {task?.taskStatusName}
                </div>
                <CardBody>
                    {task.tasks.map((taskDetail, index) => {
                        return (
                            <Card key={index}>
                                <CardHeader className="text-left ">
                                    <span className="mr-2">
                                        {taskDetail?.taskName}
                                    </span>
                                    <span
                                        className={getTaskPriorityBadgeCssClass(
                                            taskDetail
                                        )}
                                    >
                                        {
                                            taskDetail?.taskPriority
                                                ?.taskPriorityName
                                        }
                                    </span>
                                </CardHeader>
                                <CardBody>
                                    <div tag="h5" className="text-left">
                                        {taskDetail?.description}
                                    </div>
                                    <Table
                                        borderless
                                        className="text-left w-1/2"
                                    >
                                        <thead>
                                            <tr>
                                                <td>Created: </td>
                                                <td className="flex flex-row">
                                                    <BsFillFilePersonFill className="self-center mr-1" />
                                                    {
                                                        taskDetail?.createdByUser
                                                            ?.userName
                                                    }
                                                    <BsCalendar2Event className="self-center mr-1 ml-3" />
                                                    {taskDetail?.createdOnString}
                                                </td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Assigned to:</td>
                                                <td className="flex flex-row">
                                                    <BsPersonCheckFill className="self-center mr-1" />
                                                    {
                                                        taskDetail
                                                            ?.assignedToUser
                                                            ?.userName
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Project:</td>
                                                <td className="flex flex-row">
                                                    <BsBriefcaseFill className="self-center mr-1" />
                                                    {
                                                        taskDetail?.project
                                                            ?.projectName
                                                    }{" "}
                                                    - &nbsp;
                                                    {
                                                        taskDetail?.project
                                                            ?.clientLocation
                                                            ?.clientLocationName
                                                    }
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Create By</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {taskDetail?.taskStatusDetails.map(
                                                (taskStatusDetail, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <th scope="row">
                                                                {
                                                                    taskStatusDetail?.statusUpdationDateTimeString
                                                                }
                                                            </th>
                                                            <td
                                                                className={getTaskGroupTextCssClass(
                                                                    taskStatusDetail
                                                                )}
                                                            >
                                                                {
                                                                    taskStatusDetail
                                                                        ?.taskStatus
                                                                        ?.taskStatusName
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    taskStatusDetail
                                                                        ?.user
                                                                        ?.userName
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    taskStatusDetail?.description
                                                                }
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            )}
                                        </tbody>
                                    </Table>
                                </CardBody>
                                <CardFooter className="text-left">
                                    <Button
                                        color="secondary"
                                        onClick={() =>
                                            toggleUpdateTaskStatusForm(
                                                taskDetail?.taskID
                                            )
                                        }
                                        outline
                                        className="flex flex-row"
                                    >
                                        <BsPencil className="self-center mr-1" />
                                        Change Status
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </CardBody>
            </Card>
            <Modal isOpen={modal}>
                <ModalHeader toggle={toggleModal}>Update Status</ModalHeader>
                <UpdateTaskStatusForm
                    taskDetailID={taskDetailID}
                    onSubmitChangeTaskStatus={onSubmitChangeTaskStatus}
                ></UpdateTaskStatusForm>
            </Modal>
        </div>
    );
}

export default TaskItem;
