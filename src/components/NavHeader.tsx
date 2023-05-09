import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { GoChevronLeft } from 'react-icons/go';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

interface NavHeaderProps {
  children: string;
}

const NavHeader: FC<NavHeaderProps> = ({ children }) => {
  return (
    <>
      <header>
        <nav className="nav-header">
          <NavLink to="/">
            <GoChevronLeft />
          </NavLink>
          <div>{children}</div>
          <AiOutlineQuestionCircle />
        </nav>
      </header>
    </>
  );
};

export default NavHeader;
