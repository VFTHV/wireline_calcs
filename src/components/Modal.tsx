import { FC, Dispatch } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { modalTextDict } from '../database/componentDicts';
import { StoreState } from '../store';
import { useSelector } from 'react-redux';

interface ModalProps {
  isOpen: boolean;
  onClose: Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const { compDictKey } = useSelector((state: StoreState) => state.cbl);

  const targetElement = document.getElementById('modal-root');
  if (!isOpen || !targetElement) {
    return null;
  }

  const { title, content } =
    compDictKey !== null
      ? modalTextDict[compDictKey]
      : {
          title: 'Sorry, no content',
          content: <p>Sorry, no content</p>,
        };

  return createPortal(
    <div aria-label="Help information window" className="modal">
      <header className="modal-header">
        <h4
          className="modal-title"
          id="modal-heading"
          aria-label="help item heading"
        >
          {title}
        </h4>
        <div className="pointer" onClick={() => onClose(false)}>
          <AiOutlineClose />
        </div>
      </header>
      <article className="modal-content" aria-labelledby="modal-heading">
        {content}
      </article>
    </div>,
    targetElement
  );
};
