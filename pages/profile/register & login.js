const signUp = e => {
    let name = document.getElementById("name").value 
    let email = document.getElementById("email").value 
    let phone_number = document.getElementById("phone_number").value 
    let password = document.getElementById("password").value 

    let userData = JSON.parse(localStorage.getItem("userData")) || [];
     
    let exist = userData.length &&
        JSON.parse(localStorage.getItem("userData")).some(function(data){
            data.phone_number.toLowerCase() == phone_number.toLowerCase() &&    
            data.email.toLowerCase() == email.toLowerCase()
        }   
            );

            if(!exist){
                userData.push({"name":name, "email":email, "phone_number": phone_number,"password": password});
                localStorage.setItem("userData", JSON.stringify(userData));
                console.log(localStorage.getItem("userData"));
                document.querySelector("form").reset();
                document.getElementById("phone_number").focus();
                document.getElementById('email').focus();
                alert("Register Sucessfull ✅");
                location.href = "./Login.html";
            }
            else{  
                alert("Sorry the User already Exist!! \n Try with different Phone number or email");
                document.querySelector("form").reset();
            }
            e.preventDefault();     
    
}

const signIn = e =>{
    let phone_number = document.getElementById("phone_number").value
    let password = document.getElementById("password").value

    let userData = JSON.parse(localStorage.getItem("userData")) || [];
    let exist = userData.length &&
    JSON.parse(localStorage.getItem("userData")).some(data =>
        data.phone_number.toLowerCase() == phone_number.toLowerCase() &&
        data.password.toLowerCase() == password.toLowerCase()
        );
        if(!exist){
            alert("Invalid Details 😈");
        }
        else{
            alert("Login Sucessful ✅");
            location.href = "../../index.html";
        }
        e.preventDefault();
}