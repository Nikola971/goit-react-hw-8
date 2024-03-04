import css from './Pages.module.css';
import LoginForm from '../components/LoginForm/LoginForm';

export default function Login() {
  return (
    <div className={css.containerAuth}>
      <h2 className={css.titleAuth}>Login</h2>

      <LoginForm />
    </div>
  );
}
