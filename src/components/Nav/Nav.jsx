import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="user">User</NavLink>
        </li>
        <li>
          <NavLink to="admin">Admin</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;