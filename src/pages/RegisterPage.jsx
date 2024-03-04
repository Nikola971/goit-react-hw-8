import css from './Pages.module.css';
import RegisterForm from '../components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <div className={css.containerAuth}>
      <h2 className={css.titleAuth}>Registration</h2>
      <RegisterForm />
    </div>
  );
}
