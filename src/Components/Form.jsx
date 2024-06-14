import React, { useState, useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

const Form = () => {
  const { state } = useContext(ContextGlobal);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.name.length <= 5) {
      setError('Por favor verifique su información nuevamente, el nombre debe tener al menos 5 caracteres');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Por favor verifique su información nuevamente, el email no es válido');
      return;
    }

    if (formData.message.length <= 10) {
      setError('Por favor verifique su información nuevamente, el mensaje debe tener al menos 10 caracteres');
      return;
    }

    console.log('Form data:', formData);
    setSuccess(`Gracias ${formData.name}, te contactaremos cuando antes vía mail`);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className={`contact-form ${state.theme === 'dark' ? 'dark' : ''}`} onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nombre completo:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <button type="submit" className="submit-button">Enviar</button>
    </form>
  );
};

export default Form;
