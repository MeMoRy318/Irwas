const checkNumberImput = (target) => {
  target.value = target.value.replace(/\D/g, '').substring(0, 10);
};

export default checkNumberImput;