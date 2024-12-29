import { AiOutlineClose } from 'react-icons/ai';
import { modalTextDict } from '../database/modalDict';
import { changeIsModalOpen, StoreState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { GoChevronLeft } from 'react-icons/go';

export const Modal = () => {
  const dispatch = useDispatch();
  const { compDictKey } = useSelector((state: StoreState) => state.cbl);

  const onClose = () => dispatch(changeIsModalOpen(false));

  const { title, content } = compDictKey
    ? modalTextDict[compDictKey]
    : {
        title: 'Sorry, no content',
        content: <p>Sorry, no content</p>,
      };

  return (
    <div aria-label="Help information window" className="calcs-modal">
      <header className="modal-header">
        <GoChevronLeft className="pointer" onClick={onClose} />
        <h4 id="modal-heading" aria-label="help item heading">
          {title}
        </h4>
        <div className="pointer" onClick={onClose}>
          <AiOutlineClose />
        </div>
      </header>
      <article className="modal-content" aria-labelledby="modal-heading">
        {content}
      </article>
    </div>
  );
};
