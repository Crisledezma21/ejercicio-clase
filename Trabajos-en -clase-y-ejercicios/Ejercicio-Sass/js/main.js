let btn = document.getElementById('btn');
btn.addEventListener('click',validate);

function validate(){
  let inputList = getInputs();
  for(i=0;i<inputList.length;i++){
    let input = inputList[i];
    if(input.value === ''){
      input.classList.add('error');
    }else{
      input.classList.remove('error');
    }
  }
}

function getInputs(){
  return document.getElementsByTagName('input');
}