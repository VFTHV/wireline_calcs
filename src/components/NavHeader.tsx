import { FC, useState } from 'react';
import { GoChevronLeft } from 'react-icons/go';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { Modal } from '.';
import { useDispatch } from 'react-redux';
import { changeCompDictKey } from '../store';

interface NavHeaderProps {
  children: string | string[];
}

export const NavHeader: FC<NavHeaderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(changeCompDictKey(null));
  };

  return (
    <>
      <header>
        <nav className="nav-header" aria-label="navigation-menu">
          <GoChevronLeft onClick={onClick} />
          <h4>{children}</h4>
          <div className="pointer" onClick={() => setIsModalOpen(true)}>
            <AiOutlineQuestionCircle />
          </div>
        </nav>
      </header>
      <Modal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen} />
    </>
  );
};
