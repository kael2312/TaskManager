import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

ProjectPage.propTypes = {
    listProject: PropTypes.array
};

function ProjectPage(props) {
    const { listProject } = props
    const listProjectState = useSelector((state) => state.project.current);
    console.log("From props: ", listProject);
    console.log("From state: ", listProjectState);
    return (
        <ul>
            {
                listProjectState.map(todo => (
                    <li key={todo.projectID}>{todo.projectName}</li>
                ))
            }
        </ul>
    );
}

export default ProjectPage;