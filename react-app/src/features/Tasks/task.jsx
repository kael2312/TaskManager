import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TaskPage from './pages/taks-page';
import { Container } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { getListTask } from './taskSlice';

Task.propTypes = {
    
};

function Task(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getListTask())
    }, [dispatch])

    return (
        <div className='px-10'>
            <TaskPage></TaskPage>
        </div>
    );
}

export default Task;