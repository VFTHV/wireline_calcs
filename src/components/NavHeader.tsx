import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GoChevronLeft } from 'react-icons/go';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { Modal } from './AllComponents';

interface NavHeaderProps {
  children: string;
}

export const NavHeader: FC<NavHeaderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  console.log(isModalOpen);
  return (
    <>
      <header>
        <nav className="nav-header">
          <NavLink to="/">
            <GoChevronLeft />
          </NavLink>
          <div>{children}</div>
          <div onClick={() => setIsModalOpen(true)}>
            <AiOutlineQuestionCircle />
          </div>
        </nav>
      </header>
      <Modal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen} />
    </>
  );
};
