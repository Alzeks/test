import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../store/taskSlice';

export default function MoodalUP({ task }) {
    const [value, setValue] = useState('')
    const [desc, setDesc] = useState('')
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const handleShow = () => setShow(true);
    const handleClose = () => {
        console.log(task.id);
        const data = {
            id: task.id,
            title: value,
            desc: desc,
            status: 'active'
        }
        dispatch(updateTask(data))
        setShow(false);
    }

    return (
        <>
            <Button variant="secondary" size="sm" onClick={handleShow}>
                Update
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Task:{task.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <input className="mb-2"
                            type='text'
                            placeholder='Title'
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <input
                            type='text'
                            placeholder='Description'
                            value={desc}
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

//export default Mod;