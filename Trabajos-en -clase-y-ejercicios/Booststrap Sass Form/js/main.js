  let valid = true;
  let inputList = document.querySelectorAll('input');
  let textarea = document.getElementById('textarea');
function validateForm() {
  for (i = 0; i < inputList.length; i++) {
    if (inputList[i].type != 'radio' && inputList[i].value == ''){
      inputList[i].classList.remove('is-valid');
      inputList[i].classList.add('is-invalid');
      valid = false;
    } else if(inputList[i].type != 'radio'){
      inputList[i].classList.remove('is-invalid');
      inputList[i].classList.add('is-valid');
    }
  }
  if(textarea.value == ''){
    textarea.classList.remove('is-valid');
    textarea.classList.add('is-invalid');
    valid = false;
  }else{
    textarea.classList.remove('is-invalid');
    textarea.classList.add('is-valid');
  }
  return valid;
}