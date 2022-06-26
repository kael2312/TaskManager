import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import ProjectCard from "../components/ProjectCard/project-card";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ProjectForm from "../components/ProjectForm/project-form";
import { addProject, updateProject } from "../projectSlice";

ProjectPage.propTypes = {};

function ProjectPage(props) {
    const listProjectState = useSelector((state) => state.project.current);
    const [modal, setModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [editProject, setEditProject] = useState({})
    const [isUpdateProject, setIsUpdateProject] = useState(false)

    const dispatch = useDispatch()
    const toggle = () => {
        setModal(!modal);
        setModalTitle("Add Project");
        setEditProject({
            projectID: 0 ,
            projectName: "" ,
            dateOfStart: "2022-06-25T04:14:20.198Z",
            teamSize: 0 ,
            active: true,
            status: "In Force" ,
            clientLocationID: 0 ,
            clientLocation: {},
        })
        setIsUpdateProject(false)

    };
    const closeModal = () => {
        setModal(false);
    };

    useEffect(() => {
        
    }, [listProjectState])

    const onEditProject = (project) => {
        setEditProject(project)
        setModal(true);
        setModalTitle("Edit Project");
        setIsUpdateProject(true)
    };

    const onSubmitProjectForm = (value) => {
        if (isUpdateProject) {
            const updateValue = {...value}
            updateValue['dateOfStart'] = "2022-06-25T04:14:20.198Z"
            dispatch(updateProject(updateValue))
        }else{
            dispatch(addProject(value))
        }
        setModal(false);
    };

    
    return (
        <div className="flex flex-col gap-4">
            <div>
                <Button color="primary" onClick={toggle} className="float-left">
                    Add Project
                </Button>
                <Modal isOpen={modal}>
                    <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
                    <ProjectForm
                        onSubmitProjectForm={onSubmitProjectForm}
                        editProject={editProject}
                    ></ProjectForm>
                </Modal>
            </div>
            <div className="grid grid-cols-3 gap-4">
                    {listProjectState.map((project) => {
                        return (                                   
                            <div  key={project.projectID}>
                                <ProjectCard
                                    project={project}
                                    onEditProject={onEditProject}
                                ></ProjectCard>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default ProjectPage;
