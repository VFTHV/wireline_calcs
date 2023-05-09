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
    <li className="navlink">
      <BsCalculator />
      <NavLink to={to}>{children}</NavLink>
      <GoChevronRight />
    </li>
  );
};

export default NavItem;
