import { FC, Dispatch } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalProps {
  isOpen: boolean;
  onClose: Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const targetElement = document.getElementById('modal-root');
  if (!isOpen || !targetElement) {
    return null;
  }

  return createPortal(
    <div className="modal">
      <div onClick={() => onClose(false)}>
        <AiOutlineClose />
      </div>
      <div className="modal-content">
        <h2>Modal Title</h2>
        <p>Modal Content</p>
      </div>
    </div>,
    targetElement
  );
};
