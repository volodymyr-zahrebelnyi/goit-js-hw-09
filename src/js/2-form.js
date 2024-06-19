const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const LS_KEY = 'feedback-form-state';

const savedData = JSON.parse(localStorage.getItem(LS_KEY) ?? '{}');
emailInput.value = savedData.email || '';
messageInput.value = savedData.message || '';

form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    console.log('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(LS_KEY);
    form.reset();
  }
});
