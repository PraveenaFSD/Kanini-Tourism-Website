import React from "react";
import { Modal, Button } from "react-bootstrap";
import log from '../Images/question.jpg'
import '../Compenents/DeleteAlert.css'
function DeleteAlert(props) {
  const handleClose = () => {
    // Call the onClose prop from the parent to close the modal
    props.onClose();
  };

  const handleDelete = () => {
    // Call the onDelete prop from the parent to perform the delete action
   Del();
  };
  const Del = () => {
    console.log();
    // const token = localStorage.getItem('token');
    const IdDTO = {
      id: props.prod,
    };
    console.log(IdDTO.id+ "infu");

    fetch("http://localhost:5129/api/User/Delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': "Bearer "+token
      },
      body: JSON.stringify(IdDTO),
    })
      .then((res) => {
        console.log(res.status);
        if (res.status == 202) {
          handleClose()
        } else {
          handleClose()

          alert("delete user was unsuccessful");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="main">
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={log} alt="Agent"  style={{widht:"10px"}} className="del-img"/>
        <br/>

          <p className="model-text">Are you sure you want to delete this agent?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteAlert;
