import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks';
import css from './UserMenu.module.css';
import { CiLogout } from 'react-icons/ci';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <div className={css.wrapperText}>
        <p className={css.username}>Welcome,</p>
        <p className={css.username}>{user.name}</p>
      </div>
      <button type="button" onClick={() => dispatch(logOut())} className={css.btn}>
        <CiLogout size="30" />
      </button>
    </div>
  );
};
