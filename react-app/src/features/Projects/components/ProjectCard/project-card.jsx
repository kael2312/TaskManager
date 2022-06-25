import React from "react";
import PropTypes from "prop-types";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Table,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../projectSlice";

ProjectCard.propTypes = {
    project: PropTypes.object,
    onEditProject: PropTypes.func,
    deleteProject: PropTypes.func,
};

function ProjectCard(props) {
    const { project, onEditProject } = props;
    const dispatch = useDispatch();

    const onEditClick = () => {
        if (onEditProject) {
            onEditProject(project)
        }
    }

    const onDeleteClick = () => {
        dispatch(deleteProject(project.projectID))        
    }
    return (
        <Card style={{ with: "33%" }}>
            <CardHeader>{project.projectName}</CardHeader>
            <CardBody>
                <Table borderless size="xl">
                    <tbody>
                        <tr>
                            <th
                                scope="row"
                                style={{ float: "left", marginRight: "50px" }}
                            >
                                Date of Start
                            </th>
                            <td style={{ float: "right" }}>
                                {project.dateOfStart}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ float: "left" }}>
                                Team Size
                            </th>
                            <td style={{ float: "right" }}>
                                {project.teamSize}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ float: "left" }}>
                                Client Location
                            </th>
                            <td style={{ float: "right" }}>
                                {project.clientLocation.clientLocationName}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ float: "left" }}>
                                Status
                            </th>
                            <td style={{ float: "right" }}>{project.status}</td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
            <CardFooter>
                <Button color="warning" style={{marginRight: "20px"}} onClick={onEditClick}>Edit</Button>
                <Button color="danger" onClick={onDeleteClick}>Delete</Button>
            </CardFooter>
        </Card>
    );
}

export default ProjectCard;
