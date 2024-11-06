import React,{useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'

const Add = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>


      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
          <FloatingLabel controlId="floatingCaption" label="Video Caption">
        <Form.Control type="text" placeholder="Caption" />
      </FloatingLabel>
      <FloatingLabel className='mt-2' controlId="floatingUrl" label="Video Image Url">
        <Form.Control type="text" placeholder="Video Image Ur" />
      </FloatingLabel>
      <FloatingLabel className='mt-2' controlId="floatingLink" label="Video Youtube Link">
        <Form.Control type="text" placeholder="Video Youtube Link" />
      </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn btn-info' variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
