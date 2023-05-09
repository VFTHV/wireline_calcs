import { NavLink } from 'react-router-dom';

function NavPage() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/weakpoint">Weak Point Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/weightbar">Sinker Bar Weight Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/stretch">Cable Stretch Calculator</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavPage;
