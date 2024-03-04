import { BsEmojiDizzyFill } from 'react-icons/bs';
import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <>
      <h3 className={css.textError}>Oh, reload the page!</h3>
      <p>
        <BsEmojiDizzyFill className={css.iconError} size="140" />
      </p>
    </>
  );
};

export default ErrorMessage;
