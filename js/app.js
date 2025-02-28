let city = document.getElementById('city');
let btn = document.getElementById('btn');

let firstName = document.querySelector('.firstName');
firstName.addEventListener('input',firstNameValidation);

let lastName = document.querySelector('.lastName');
// lastName.addEventListener('input', lastNameValidation);

let phone = document.querySelector('.phone');
phone.addEventListener('input',phoneValidation);
// let email = document.querySelector('.email');

city.addEventListener('change',updateCities);
btn.addEventListener('click',validateForm);
// city.innerHTML = "<option value=''> Choose City </option> ";

function updateCities(){
    // let city = document.getElementById('city');
    let country = document.getElementById('country').value;
    city.innerHTML="";
    // city.innerHTML = "<option value=''> Choose City </option> ";

    let cityDic =[];
    if(country == 'iran' ){
        cityDic = [{name:'تهران',value:'tehran'},{name:'مشهد',value:'mashhad'},{name:'شیراز',value:'shiraz'},{name:'اصفحان',value:'esfahan'}];     
    } else if (country == 'france') {
        cityDic = [{name:'Paris',value:'Paris'},{name:'Marseille',value:'Marseille'},{name:'Lille',value:'Lille'},{name:'Limoges',value:'Limoges'}];
    } else if (country == 'usa') {
        cityDic = [{name:'New York',value:'New York'},{name:'Los Angeles',value:'Los Angeles'},{name:'Chicago',value:'Chicago'},{name:'San Diego',value:'San Diego'}];
    } 

    for(i=0 ; i<cityDic.length ; i++){
        let cityOptions = document.createElement('option');
        cityOptions.value = cityDic[i].value;
        cityOptions.innerHTML = cityDic[i].name;

        city.appendChild(cityOptions);
    }
    cityOptions.value="";
}

function validateForm() {
    let country = document.getElementById('country').value;
    let city = document.getElementById('city').value;

    let message = document.getElementById('message');
    let errorMessage = document.getElementById('errorMessage');
    let nameMessage = document.getElementById('nameMessage');


    if (!city || !country){
        errorMessage.style.display = 'block';
    }
    
    setTimeout(() => {
        errorMessage.style.display = 'none';
        message.style.display = 'none';
        nameMessage.style.display = 'none';
        phone.value="";
        firstName.value="";
    }, 2000);
}

function phoneValidation() {
    let message = document.getElementById('message');

    if (!/^\d+$/.test(phone.value)) {  
        message.classList.remove('valid');
        message.classList.add('invalid');
        message.textContent = 'Phone number must contain only digits';
        return; 
    }

    if(phone.value.length===11){
        message.classList.remove('invalid');
        message.classList.add('valid');
        message.textContent = 'phone number is valid';
    } else {
        message.classList.remove('valid');
        message.classList.add('invalid');
        message.textContent = 'phone number is not valid';
    }
}

function firstNameValidation(){
    let nameMessage = document.getElementById('nameMessage');
    if(firstName.value.length>=3){
        nameMessage.classList.remove('invalid');
        nameMessage.classList.add('valid');
        nameMessage.textContent = 'Your first name is valid';
    } else {
        nameMessage.classList.remove('valid');
        nameMessage.classList.add('invalid');
        nameMessage.textContent = 'first name must be at least 3 characters';
    }
}

// function lastNameValidation(){
//     let nameMessage = document.getElementById('nameMessage');
//     if(firstName.value.length>=3){
//         nameMessage.classList.remove('invalid');
//         nameMessage.classList.add('valid');
//         nameMessage.textContent = 'Your first name is valid';
//     } else {
//         nameMessage.classList.remove('valid');
//         nameMessage.classList.add('invalid');
//         nameMessage.textContent = 'first name must be at least 3 characters';
//     }
// }

