const emailForm = document.subscriptionData;
const inputEmail = emailForm.email;
const submitButton = emailForm.querySelector('.footer__input-button');

function toggleButtonState(input, form) {
    const inputIsValid = input.validity.valid;
    if (inputIsValid) {
        submitButton.textContent = 'Ок!';
    } else {
        submitButton.textContent = '';
    }
}

submitButton.addEventListener('submit', (event) => {
    event.preventDefault();
})

inputEmail.addEventListener('input', (event) => {
    toggleButtonState(event.target, emailForm)
    submitButton.textContent;
})