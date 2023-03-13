import { useEffect } from 'react';
import './ErrorMessagePopup.css';

function ErrorMessagePopup({ isOpen, onClose, message }) {
  useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    }
  });

  function handleEscClose(event) {
    if (event.key === 'Escape') {
      onClose();
    }
  }

  function close(event) {
    if (event.target.classList.contains('popup_opened') ||
      event.target.classList.contains('popup__button-close')) {
      onClose();
    }
  }

  return (
    <div className={`popup ${isOpen && "popup_opened"}`}
      role="dialog"
      aria-modal="true"
      onMouseDown={close}>
      <div className="popup__container">
        <button className="popup__button-close"
          type="button"
          aria-label="Закрыть"
          onMouseDown={close} />
        <p className="popup__message">{message}</p>
      </div>
    </div>
  );
}

export default ErrorMessagePopup;