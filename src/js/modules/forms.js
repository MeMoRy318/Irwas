import checkNumberImput from './checkNumberImput';

const forms = (state = {}) => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const phoneInputs = document.querySelectorAll('input[name="user_phone"]');
  
  const messages = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };
  
  const clearInputs = () => {
    inputs.forEach(input => {
      input.value = '';
    });
  };
  
  const createStatusElement = () => {
    const status = document.createElement('div');
    status.classList.add('status');
    return status;
  };
  
  const postData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: data
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      return await response.json();
    } catch (error) {
      throw new Error('Failed to send data');
    }
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const status = createStatusElement();
    form.appendChild(status);
    status.innerText = messages.loading;
    const data = JSON.stringify({...state,...Object.fromEntries(new FormData(form).entries())});
    clearInputs();
    try {
      await postData(BASE_URL, data);
      status.innerText = messages.success;
    } catch (error) {
      status.innerText = messages.failure;
    } finally {
      state = {};
      setTimeout(() => {
        status.remove();
      }, 5000);
    }
  };
  
  const handlePhoneInput = (event) => {
    const input = event.target;
    checkNumberImput(input);
  };
  
  forms.forEach(form => {
    form.addEventListener('submit', handleSubmit);
  });
  
  phoneInputs.forEach(input => {
    input.addEventListener('input', handlePhoneInput);
  });
};
  
export default forms;
  