import React from 'react';
import { Modal } from 'flowbite-react';
import { useSelector } from 'react-redux';

function CustomModal({ isOpen, onClose, children, size = "xl" }) {
  const mode = useSelector((state) => state.mode.mode);
  
  return (
    <Modal show={isOpen} onClose={onClose} closable={true} backdrop={"dynamic"} size={`${size}`} position="center">
      <div className={`grid place-items-center font-bold overflow-hidden bg-[#${mode.mode? "000": "FFFFFF"}]`}>
        <Modal.Body>
        {children}
      </Modal.Body>
      </div>
      
    </Modal>
  );
}

export default CustomModal;
