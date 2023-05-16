import NavItem from '../components/NavItem';

const NavPage = () => {
  return (
    <nav className="navigation">
      <ul>
        <NavItem to="/units">Change Measurement Units</NavItem>
        <NavItem to="/weakpoint">Weak Point Calculator</NavItem>
        <NavItem to="/weightbar">Sinker Bar Weight Calculator</NavItem>
        <NavItem to="/stretch">Cable Stretch Calculator</NavItem>
      </ul>
    </nav>
  );
};

export default NavPage;
