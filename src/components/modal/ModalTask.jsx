import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/taskSlice';

export default function MoodalTask({ modal }) {
  const [value, setValue] = useState('')
  const [desc, setDesc] = useState('')
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const handleShow = () => setShow(true);

  const handleClose = () => {
    let rand = 1 + Math.random() * 100;
    let id = Math.floor(rand)
    const data = {
      id: id,
      title: value,
      desc: desc,
      status: 'active'
    }
    dispatch(addTask(data))
    setShow(false);
  };

  return (
    <>
      <Button variant="secondary" size="sm" onClick={handleShow}>
        Launch addTask modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Write your task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <input className=' mb-2'
              type='text'
              placeholder='Title'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <input
              type='text'
              placeholder='Description'
              value={desc} do
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

