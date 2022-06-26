import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Modal, ModalHeader } from 'reactstrap';
import TaskForm from '../components/TaskForm/task-form';
import TaskItem from '../components/TaskItem/task-item';

TaskPage.propTypes = {

};

function TaskPage(props) {
    const [listTask, setListTask] = useState([])
    const [modal, setModal] = useState(false)
    const listTaskState = useSelector(state => state.task.current) 


    useEffect(() => {
            setListTask(listTaskState)  
    }, [listTaskState])

    const toggle = () => {
        setModal(!modal)
    }

    return (
        <div className="flex flex-col gap-4">
            <div>
                <Button color="primary" onClick={toggle} className="float-left">
                    Add Task
                </Button>
                <Modal isOpen={modal}>
                    <ModalHeader toggle={toggle}>Add Task</ModalHeader>
                    <TaskForm></TaskForm>
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