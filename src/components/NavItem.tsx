import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { GoChevronRight } from 'react-icons/go';
import { BsCalculator } from 'react-icons/bs';

interface NavItemProps {
  to: string;
  children: string;
}

const NavItem: FC<NavItemProps> = ({ to, children }) => {
  return (
    <NavLink to={to}>
      <li className="navitem">
        <BsCalculator />
        {children}
        <GoChevronRight />
      </li>
    </NavLink>
  );
};

export default NavItem;
