function validateForm() {
  let inputList = document.querySelectorAll('input');
  let textarea = document.getElementById('textarea');
  for (i = 0; i < inputList.length; i++) {
    if (inputList[i].type != 'radio' && inputList[i].value == ''){
      inputList[i].classList.remove('is-valid');
      inputList[i].classList.add('is-invalid');
    } else {
      inputList[i].classList.remove('is-invalid');
      inputList[i].classList.add('is-valid');
    }
  }
  if(textarea.value == ''){
    textarea.classList.remove('is-valid');
    textarea.classList.add('is-invalid');
  }else{
    textarea.classList.remove('is-invalid');
    textarea.classList.add('is-valid');
  }
}