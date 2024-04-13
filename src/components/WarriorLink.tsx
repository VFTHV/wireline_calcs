import { FC } from 'react';
import { GoChevronRight } from 'react-icons/go';
import { IoMdBook } from 'react-icons/io';

interface WarriorLinkProps {
  to: string;
}

export const WarriorLink: FC<WarriorLinkProps> = ({ to }) => {
  return (
    <li className="navitem coral">
      <IoMdBook />
      <a href={to}>New: Warrior Logging Course!!!</a>
      <GoChevronRight />
    </li>
  );
};
