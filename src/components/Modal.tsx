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
      <header className="modal-header">
        <h4 className="modal-title">Modal Title</h4>
        <div className="pointer" onClick={() => onClose(false)}>
          <AiOutlineClose />
        </div>
      </header>
      <div className="modal-content">
        <p>Modal Content</p>
      </div>
    </div>,
    targetElement
  );
};
