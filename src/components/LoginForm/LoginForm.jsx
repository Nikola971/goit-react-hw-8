import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';
import * as Yup from 'yup';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';

const registerSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(7, 'Too Short!').required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');

  const handleSubmit = (values, actions) => {
     dispatch(
      logIn(values)
    )
      .unwrap()
      .then(() => {
        toast.success('Welcome!');
      })
      .catch(() => {
        toast.error('User not found!');
      });
    actions.resetForm();
};


  const handleToggle = () => {
  setType(type === "password" ? "text" : "password")
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          <Field type="email" name="email" className={css.input} placeholder="Email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </label>
        <label className={css.label}>
          <div className={css.passView}>
            <Field
              type={type}
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
              className={css.inputPass}
              placeholder="Password"
            />
            <span className={css.iconEye} onClick={(handleToggle)}>
              <Icon icon={type === "password" ? eye : eyeOff} size={20} />
            </span>
          </div>
          <ErrorMessage className={css.error} name="password" component="span" />
        </label>
        <button type="submit" className={css.btn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
