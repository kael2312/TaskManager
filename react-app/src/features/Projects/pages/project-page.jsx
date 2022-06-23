import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import ProjectCard from "../components/ProjectCard/project-card";

ProjectPage.propTypes = {};

function ProjectPage(props) {
    const listProjectState = useSelector((state) => state.project.current);
    console.log(listProjectState);
    return (
        <Stack direction="row" spacing={2}>
            {listProjectState.map((project) => {
                return (
                    <div key={project.projectID}>
                        <ProjectCard  project={project}></ProjectCard>
                    </div>
                )
            })}
        </Stack>
    );
}

export default ProjectPage;
