import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
import css from './Navigation.module.css';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navLink}>
      <NavLink className={css.link} to="/">
        <h1>Home</h1>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};