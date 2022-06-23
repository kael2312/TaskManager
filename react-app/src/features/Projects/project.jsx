import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProjectPage from "./pages/project-page";
import { useDispatch, useSelector } from "react-redux";
import { getListProject } from "./projectSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import Container from "@mui/material/Container";

Project.propTypes = {};

function Project(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListProject());

    }, [dispatch])
    return (
        <div>
            <Container>
                <ProjectPage></ProjectPage>
            </Container>
        </div>
    );
}

export default Project;
