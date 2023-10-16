import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import ModalTask from './components/modal/ModalTask';
import { Button, Card } from 'react-bootstrap'
import TaskItem from './components/TaskItem';
//import Card from 'react-bootstrap/Card';

function App() {
  const tasks = useSelector((state) => state.cart.tasks)
  const [data, setData] = useState([])
  const [modal, setModal] = useState(false)

  useEffect(() => {
    setData(tasks)
  }, [tasks])

  const filterActive = () => {
    setData(tasks.filter((task) => task.status === 'active'))
  }
  const filterDone = () => {
    setData(tasks.filter((task) => task.status !== 'active'))
  }
  const skiper = () => {
    setData(tasks)
  }

  return (
    <Card className='row '>
      <ModalTask />
      <Button variant="primary" size='sm' onClick={filterActive}>Filter Active</Button>
      <Button variant="primary" size='sm' onClick={skiper}>Filter Skipe</Button>
      <Button variant="primary" size='sm' onClick={filterDone}>Filter Dane</Button>
      <Card className='row mt-2'>
        <div>{data && data.map((task) =>
          <TaskItem key={task.id} task={task} />
        )}
        </div>
      </Card>
    </Card>

  );
}

export default App;
