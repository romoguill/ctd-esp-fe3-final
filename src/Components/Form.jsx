import React, { useState } from 'react';
import { isValidEmail, isValidName } from '../utils/validationForm';

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [flashMsg, setFlashMsg] = useState();
  const [errorMsg, setErrorMsg] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail(email) && isValidName(name)) {
      setFlashMsg(`Gracias ${name}, te contactaremos cuanto antes via mail`);
    } else {
      setErrorMsg('Por favor verifique sus datos');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="name"
          placeholder="Fullname"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
