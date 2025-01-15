
// Get form elements
const contactForm = document.getElementById('contact-form');
const userName = document.getElementById('name-field');
// const phone=document.getElementById('phone-field');
const email = document.getElementById('email-field');
const subject = document.getElementById('subject-field');
const mailMessage = document.getElementById('message-field');

//err message
const nameError = document.getElementById('error-name');
const emailError = document.getElementById('error-email');
const subjectError = document.getElementById('error-subject');
const messageError = document.getElementById('error-message');

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Add submit event listener
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();

});

// Set error message
setError = (errBorderStyle, errorNote, errElement) => {
  errBorderStyle.style.borderColor = "#ff0000";
  errElement.innerText = errorNote;
}

// Clear error message
clearError = (errBorderStyle, errElement) => {
  errBorderStyle.style.borderColor = "#808080";
  errElement.innerText = '';

}





const validateInputs = () => {

  const nameValue = userName.value.trim();
  const mailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = mailMessage.value.trim();
  //  const phone=phone.value.trim();

  let isValid = true;

  if (nameValue === '') {
    setError(userName, 'name is required', nameError);
    isValid = false;
  } else {
    clearError(userName, nameError);
  }

  if (!validateEmail(mailValue)) {
    setError(email, mailValue + '  invalid email', emailError);
    isValid = false;
  }
  else {
    clearError(email, emailError);
  }


  if (subjectValue === '') {
    setError(subject, 'subject is required', subjectError);
    isValid = false;
  } else {
    clearError(subject, subjectError);
  }

  if (messageValue === '') {
    setError(mailMessage, 'message is required', messageError);
    isValid = false;
  } else {
    clearError(mailMessage, messageError);
  }

  if (isValid) {
    if (isValid) {
      sendMessage({ sendername: nameValue, senderemail: mailValue, subject: subjectValue, message: messageValue });
    }

  }
}

function sendMessage(params) {
  (function () {
    emailjs.init('nqUMiUetlqyJeLt37');
  })();
  let serviceId = "service_w5jkcag";
  let templateId = "template_9twpoq5";

  emailjs.send(serviceId, templateId, params)
    .then(res => {
      contactForm.reset();
      alert('sucsess ');
    })
    .catch();

}