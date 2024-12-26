import { FC, ReactNode } from 'react';
import { GoChevronRight } from 'react-icons/go';
import { BsCalculator } from 'react-icons/bs';
import { CompDictKeysType } from '../App';

interface NavItemProps {
  setDictKey: React.Dispatch<React.SetStateAction<CompDictKeysType | null>>;
  componentDictKey: CompDictKeysType;
  children: string | string[];
  icon?: ReactNode;
}

export const NavItem: FC<NavItemProps> = ({
  setDictKey,
  componentDictKey,
  children,
  icon,
}) => {
  const onClick = () => {
    setDictKey(componentDictKey);
  };

  return (
    <li className="navitem" onClick={onClick}>
      {icon ? icon : <BsCalculator />}
      {children}
      <GoChevronRight />
    </li>
  );
};
