import React from 'react';
import { Modal } from 'flowbite-react';

function CustomModal({ isOpen, onClose, children }) {
  
  return (
    <Modal show={isOpen} onClose={onClose} closable={true} backdrop={"dynamic"} size={"xl"} position="center">
      <div className="grid place-items-center font-bold">
        <Modal.Body>
        {children}
      </Modal.Body>
      </div>
      
    </Modal>
  );
}

export default CustomModal;
