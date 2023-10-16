
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { setTaskDone, deleteTask } from '../store/taskSlice';
import { useDispatch } from 'react-redux';
import ModalTask from './modal/ModalTask';
import ModalUp from './modal/ModalUp'

function TaskItem({ task }) {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)
  const setDone = (id) => {
    dispatch(setTaskDone(id))

  }
  const delete1 = (id) => { dispatch(deleteTask(id)) }
  return (
    <Card class=''>
      <Card >
        <div class='row w-90 '>
          <div class='col-1 '>{task.title}</div>
          <div class='col-6'>{task.desc}</div>
          <div class='col-2'>{task.status}</div>
          <div class='col-1 '>
            <Button variant="primary" size='sm' onClick={(() => setDone(task.id))}>TaskDone</Button>
          </div>
          <div class='col-1 '>
            <ModalUp task={task} />
          </div>
          <div class='col-1 '>
            <Button variant="danger" size='sm' onClick={(() => delete1(task.id))}>Delete</Button>
          </div>
        </div>
      </Card>
    </Card>
  );
}

export default TaskItem;