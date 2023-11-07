const myForm= document.querySelector('#my-form');
const nameInput= document.querySelector('#name');
const emailInput= document.querySelector('#email');
const msg= document.querySelector('.msg');
const userList= document.querySelector('#users');


myForm.addEventListener('submit', onsubmit);

function onsubmit(e){
    e.preventDefault();
    
    if(nameInput.value==="" || emailInput.value===""){
        msg.classList.add("error");
        msg.innerHTML="*Please enter the right details";

        setTimeout(()=> msg.remove(),2000);
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        userList.appendChild(li);

        nameInput.value='';
        emailInput.value='';

    }
    
}