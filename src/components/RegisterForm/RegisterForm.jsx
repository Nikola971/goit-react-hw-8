import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import * as Yup from 'yup';
import css from './RegisterForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { useState } from 'react';
import toast from 'react-hot-toast';

const registerSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(7, 'Too Short!').required('Required'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        toast.success('Registered!');
      })
      .catch(() => {
        toast.error('Something is wrong!');
      });
    form.reset();
  };

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={registerSchema}
    >
      <Form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          <Field type="text" name="name" className={css.input} placeholder="Username" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
        <label className={css.label}>
          <Field type="email" name="email" className={css.input} placeholder="Email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </label>
        <label className={css.label}>
          <div className={css.passView}>
            <input
              type={type}
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
              className={css.inputPass}
              placeholder="Password"
            />
            <span className={css.iconEye} onClick={handleToggle}>
              <Icon icon={icon} size={20} />
            </span>
          </div>
          <ErrorMessage className={css.error} name="password" component="span" />
        </label>
        <button type="submit" className={css.btn}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
