import { FaAddressBook } from 'react-icons/fa';
import css from './Checking.module.css';

const Checking = () => {
  return (
    <div className={css.checkingBox}>
      <h3>The phone book is empty!</h3>
      <h3>Please, add contact!</h3>
      <FaAddressBook size={100} className={css.iconChecking} />
    </div>
  );
};

export default Checking;
