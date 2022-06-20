import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProjectPage from './pages/project-page';
import { useDispatch, useSelector } from 'react-redux';
import { getListProject } from './projectSlice';
import { unwrapResult } from '@reduxjs/toolkit';

Project.propTypes = {
    
};

function Project(props) {
    const dispatch = useDispatch();
    const [listProject, setListProject] = useState([])


    // const abcd = async () => {
    //     try {
    //         const response = await dispatch(getListProject())
    //         const result = unwrapResult(response)
    //         return result
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(() => {
        (async () => {
            const projects = await dispatch(getListProject())
            const result = unwrapResult(projects)
            setListProject(result)
        })()
    }, [])
    return (
        <div>
            <ProjectPage listProject={listProject}></ProjectPage>
        </div>
    );
}

export default Project;