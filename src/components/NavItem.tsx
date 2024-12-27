import { FC, ReactNode } from 'react';
import { GoChevronRight } from 'react-icons/go';
import { BsCalculator } from 'react-icons/bs';
import { CompDictKeysType } from '../store/slices/types';
import { useDispatch } from 'react-redux';
import { changeCompDictKey } from '../store';

interface NavItemProps {
  componentDictKey: CompDictKeysType;
  children: string | string[];
  icon?: ReactNode;
}

export const NavItem: FC<NavItemProps> = ({
  componentDictKey,
  children,
  icon,
}) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(changeCompDictKey(componentDictKey));
  };

  return (
    <li className="navitem" onClick={onClick}>
      {icon ? icon : <BsCalculator />}
      {children}
      <GoChevronRight />
    </li>
  );
};
