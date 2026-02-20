document.getElementById('btn-login')
    .addEventListener('click', function () {
        //1: get Number
        const numberInput = document.getElementById('inputNumber')
        const number = numberInput.value
        //2: get pin
        const pinInput= document.getElementById('inputPin')
        const pin = pinInput.value
        //3: match those things
        if(number == '01721132610' && pin == '1234'){
            //3-1: true> go to home 
            alert('Login Successful')
            window.location.assign('/Pages/home.html')
        }
         else {
             //3-2: false> return
             alert('Login Failed')
             return;

         }
    })
