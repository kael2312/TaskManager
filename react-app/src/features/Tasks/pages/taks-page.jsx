import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader } from 'reactstrap';
import TaskForm from '../components/TaskForm/task-form';
import TaskItem from '../components/TaskItem/task-item';
import { createTask } from '../taskSlice';

TaskPage.propTypes = {

};

function TaskPage(props) {
    const dispatch = useDispatch()
    const [listTask, setListTask] = useState([])
    const [modal, setModal] = useState(false)
    const listTaskState = useSelector(state => state.task.current) 

    useEffect(() => {
            setListTask(listTaskState)  
    }, [listTaskState])

    const toggle = () => {
        setModal(!modal)
    }

    const onSubmitTaskForm = (value) => {
        dispatch(createTask(value))
        setModal(false)
    }

    return (
        <div className="flex flex-col gap-4">
            <div>
                <Button color="primary" onClick={toggle} className="float-left">
                    Add Task
                </Button>
                <Modal isOpen={modal}>
                    <ModalHeader toggle={toggle}>Add Task</ModalHeader>
                    <TaskForm onSubmitTaskForm={onSubmitTaskForm}></TaskForm>
                </Modal>
            </div>
        <div className='grid grid-cols-2 gap-4'>
            {
                listTask?.map((task, index) => {
                    return (
                        <TaskItem key={index} task={task}></TaskItem>
                    )
                })
            }
        </div>
        </div>
    );
}

export default TaskPage;