import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GoChevronLeft } from 'react-icons/go';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { Modal } from '.';

interface NavHeaderProps {
  children: string | string[];
}
// NavHeaderProps
// NavHeaderProps
// NavHeaderProps
// NavHeaderProps
// NavHeaderProps
// NavHeaderProps
// NavHeaderProps

export const NavHeader: FC<NavHeaderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <header>
        <nav className="nav-header" aria-label="navigation-menu">
          <NavLink to="/">
            <GoChevronLeft />
          </NavLink>
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
