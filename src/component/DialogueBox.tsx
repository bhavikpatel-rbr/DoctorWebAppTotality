import React from "react";
import { Modal, Button } from "react-bootstrap";

interface ConfirmationDialogProps {
  show: boolean;
  onHide: () => void;
  onYes: () => void;
  onNo: () => void;
  onCancel: () => void;
  title?: string;
  message?: string;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  show,
  onHide,
  onYes,
  onNo,
  onCancel,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
}) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onYes}>
          Yes
        </Button>
        <Button variant="secondary" onClick={onNo}>
          No
        </Button>
        <Button variant="light" onClick={onCancel}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationDialog;
