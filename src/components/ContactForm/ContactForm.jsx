import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string().min(9, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        dispatch(addContact({ id: nanoid(), ...values }));
        actions.resetForm();
      }}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.inputForm}>
          <label htmlFor={nameFieldId} className={css.labelInput}>
            Name
          </label>
          <Field type="text" name="name" id={nameFieldId} className={css.inputField} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.inputForm}>
          <label htmlFor={numberFieldId} className={css.labelInput}>
            Number
          </label>
          <Field
            type="tel"
            name="number"
            id={numberFieldId}
            className={css.inputField}
            placeholder={+380994585577}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button type="submit" className={css.btn}>
          Add contact <BsFillPersonPlusFill size="18" />
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
