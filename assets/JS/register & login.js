
const signUp = e => {

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone_number = document.getElementById("phone_number").value
    let password = document.getElementById("password").value
    let con_password = document.getElementById("con_password").value
    let my_uuid = uuidv4();

    let userData = JSON.parse(localStorage.getItem("userData")) || [];

    let exist = userData.length &&
        JSON.parse(localStorage.getItem("userData")).some(data =>
            data.phone_number.toLowerCase() == phone_number.toLowerCase() ||
            data.email.toLowerCase() == email.toLowerCase()
        );

    if (!exist) {

        if (password == con_password) {
            // push into objects
            userData.push({ "name": name, "email": email, "phone_number": phone_number, "password": password, "my_uuid":my_uuid});

            // store data into local storage
            localStorage.setItem("userData", JSON.stringify(userData));


            // after store data, reset form
            document.querySelector("form").reset();
            document.getElementById("phone_number").focus();
            document.getElementById('email').focus();
            alert("Register Sucessfull ✅");
            location.href = "./Login.html";

        }
        else {
            alert("Incorrect Passowrd ❌")
        }
    }
    else {
        alert("Sorry the User already Exist!! \n Try with different Phone number or email");
        document.querySelector("form").reset();
    }
    e.preventDefault();

}

const signIn = e => {
    let phone_number = document.getElementById("phone_number").value
    let password = document.getElementById("password").value

    let userData = JSON.parse(localStorage.getItem("userData")) || [];
    let exist = userData.length &&
        JSON.parse(localStorage.getItem("userData")).some(data =>
            data.phone_number.toLowerCase() == phone_number.toLowerCase() &&
            data.password.toLowerCase() == password.toLowerCase()
        );
    if (!exist) {
        alert("Invalid Details 😈");
    }
    else {
        let number_object = { "phone_number": phone_number };
        localStorage.setItem("user_key", JSON.stringify(number_object));
        alert("Login Sucessful ✅");
        location.href = "../../index.html";
    }
    e.preventDefault();
}

