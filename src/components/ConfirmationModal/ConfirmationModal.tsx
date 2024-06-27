import { Modal } from "antd";
import "./ConfirmationModal.css";
import React from "react";

function ConfirmationModal({
  isOpen,
  title,
  message,
  buttontext,
  onConfirm,
  onCancel,
}: {
  isOpen: boolean;
  title: React.ReactNode;
  message: React.ReactNode;
  buttontext: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div>
      <Modal
        title={title}
        open={isOpen}
        okText={buttontext}
        cancelText="Cancel"
        onOk={onConfirm}
        onCancel={onCancel}
        okButtonProps={{
          style: { backgroundColor: "red", borderColor: "red" },
        }}
        cancelButtonProps={{
          style: { backgroundColor: "lightgray", color: "gray" },
        }}
        className="w-96"
        style={{ top: "30%" }}
        // width={1500}
      >
        <p>{message}</p>
      </Modal>
    </div>
  );
}

export default ConfirmationModal;