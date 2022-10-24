// const url = "https://634e3b4bf34e1ed82686101c.mockapi.io/login-1"
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
      event.preventDefault()
        
        if (!form.checkValidity()) {
          event.stopPropagation()
        let inputEmail = document.getElementById('email').value;
        let inputPassword = document.getElementById('password').value;
        console.log(inputEmail);
        console.log(inputPassword);
        checkLogin(inputEmail,inputPassword)
        form.classList.add('was-validated')          
        } else {
          Swal.fire({
            icon: "success",
            title: "Congratulation",
            text: "youre logged in ",
            footer: '<a href="#">Go to homepage </a>',           
          })
        }       
      })
    })
  })()  

async function checkLogin (email,password){
    let response = await fetch('https://634e3b4bf34e1ed82686101c.mockapi.io/login-1')
    let users = await response.json()
    users.forEach((data) =>{
        console.log(data);
        
        if (data.Email.includes(email)||data.Password.includes(password)){
            console.log('anda berhasil login'); localStorage.setItem ('isLogin', data)
        } else  {console.log('account anda belum ada');}
    })
}


