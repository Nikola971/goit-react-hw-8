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
  const [type, setType] = useState('password');

  const handleSubmit = (values, actions) => {
   dispatch(
      register(values)
    )
      .unwrap()
      .then(() => {
        toast.success('Registered!');
      })
      .catch(() => {
        toast.error('Something is wrong!');
      });
    actions.resetForm();
}



  const handleToggle = () => {
  setType(type === "password" ? "text" : "password")
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
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
            <Field
              type={type}
              name="password"
              autoComplete="current-password"
              className={css.inputPass}
              placeholder="Password"
            />
            <span className={css.iconEye} onClick={handleToggle}>
              <Icon icon={type === "password" ? eye : eyeOff} size={20} />
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
