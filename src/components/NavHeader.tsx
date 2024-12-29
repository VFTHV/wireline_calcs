import { FC } from 'react';
import { GoChevronLeft } from 'react-icons/go';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { changeCompDictKey, changeIsModalOpen } from '../store';

interface NavHeaderProps {
  children: string | string[];
}

export const NavHeader: FC<NavHeaderProps> = ({ children }) => {
  const dispatch = useDispatch();
  const onGoBack = () => dispatch(changeCompDictKey('navPage'));
  const onModalOpen = () => {
    console.log('open modal');
    dispatch(changeIsModalOpen(true));
  };

  return (
    <header>
      <nav className="nav-header" aria-label="navigation-menu">
        <GoChevronLeft onClick={onGoBack} />
        <h4>{children}</h4>
        <div className="pointer" onClick={onModalOpen}>
          <AiOutlineQuestionCircle />
        </div>
      </nav>
    </header>
  );
};
