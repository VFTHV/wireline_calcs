import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { GoChevronRight } from 'react-icons/go';
import { BsCalculator } from 'react-icons/bs';

interface NavItemProps {
  to: string;
  children: string;
  icon?: ReactNode;
}

export const NavItem: FC<NavItemProps> = ({ to, children, icon }) => {
  return (
    <NavLink to={to}>
      <li className="navitem">
        {icon ? icon : <BsCalculator />}
        {children}
        <GoChevronRight />
      </li>
    </NavLink>
  );
};
