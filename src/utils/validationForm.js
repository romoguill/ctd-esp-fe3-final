const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const isValidName = (name) => {
  const re = /\d/;
  return name.length > 3 && name.length < 100 && !re.test(name);
};

export { isValidEmail, isValidName };
