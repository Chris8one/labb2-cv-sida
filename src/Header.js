import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="nav-container">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active-link' : ''}>My Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/cv" className={({ isActive }) => isActive ? 'active-link' : ''}>My CV</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>About Me</NavLink>
            </li>
          </ul>
          <hr className="hr-grad"/>
        </nav>
      </header>
    </div>
  );
}

export default Header;