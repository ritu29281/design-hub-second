import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Button1 from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
function Addfile() {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const buttonStyles = {
    color: "#0c0c0c;",
    backgroundColor: "transparent",
    transition: "none",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "transparent",
      outline: "none",
      boxShadow: "none",
    },
    display: "flex",
    alignItems: "center",
    padding: "0px 0px 18px 0px",
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button1 variant="primary" onClick={handleShow}>
        <span>
          <FontAwesomeIcon icon={faPaperclip} />
        </span>
      </Button1>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Click here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button
            className="icon"
            sx={buttonStyles}
            component="label"
            variant="contained"
            startIcon={<FontAwesomeIcon icon={faPaperclip} />}
          >
            <VisuallyHiddenInput type="file" />
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Addfile;
