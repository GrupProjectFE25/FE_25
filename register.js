
        // async function registerAccountSerrum (data){
        //     try{
        //         let regisResult = await fetch ('https://634e3b4bf34e1ed82686101c.mockapi.io/register-1',{
        //             method  : 'POST',
        //             body    :   JSON.stringify(data),
        //             headers: {
        //                     'Content-Type' : 'application/json;charset-UTF-8'       
        //             }
        //         }, console.log('registration succesful', regisResult)            
        //         )
        //     } catch (error) {console.log('registration failed');
        //     }
        // }       
document.getElementById('sweetalert').addEventListener('click', event =>{
        event.preventDefault();        
        let formEl =  document.querySelector('.formRegisterAccount');
        let email = document.getElementById('email-register').value;
        let password = document.getElementById('password-register').value;
        let username = document.getElementById('username-register').value;
                    if(email == ''&& username == ''&& password == ''){
                            swal.fire({
                                title: "Form cannot be blank :(",
                                text: "please fill form below",
                                icon: "warning",
                                confirmButtonText: "okey?",
                                
                              });
                            
                }  else if( username == ""){
                  swal.fire({
                      title: "You cannot sign up without username :(",
                      text: "please fill username below",
                      icon: "waning",
                      confirmButtonText: "okey?",
                      
                    });
                 
                  } else if( password == ""){
                    swal.fire({
                        title: "You cannot sign up without password  :(",
                        text: "please fill password below",
                        icon: "warning",
                        confirmButtonText: "okey?",
                        
                      });
                    }

                    else if( email == ""){
                      swal.fire({
                          title: "You cannot sign up without email  :(",
                          text: "please fill email below",
                          icon: "warning",
                          confirmButtonText: "okey?",
                          
                        });

                      }
                else {
                    Swal.fire({
                      title: 'Congrats!',
                      text: 'You can go to login page.',
                      imageUrl: 'https://i.postimg.cc/vZVhjPjH/pexels-cytonn-photography-955395.jpg',
                      imageWidth: 400,
                      imageHeight: 200,
                      imageAlt: 'Custom image',
                      footer: '<a href="login.html">lets go to login page</a>'
                    })
                }

})


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              


























