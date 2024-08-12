//Login And Sign up slider
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
let signupName = document.querySelector(".signup-name");
let signupEmail = document.querySelector(".signup-email");
let signupPassword = document.querySelector(".signup-password");
let signupConfirmPassword = document.querySelector(".signup-confirm-password");
let signupBtn = document.querySelector(".signup-btn");
let loginEmail = document.querySelector(".login-email");
let loginPassword = document.querySelector(".login-password");
let loginBtn = document.querySelector(".login-btn");
let registeredusers = JSON.parse(localStorage.getItem("registeredusers")) || [];
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

//Handling Logic of Registration and login
function checkuser() {
    return registeredusers.some(user => user.email === signupEmail.value || user.myname === signupName.value);
}
signupBtn.addEventListener("click", () => {
    if(signupPassword.value !==signupConfirmPassword.value){
        alert("Password does not match");
        return;
    }
  const obj = {
    myname: signupName.value,
    email:signupEmail.value,
    password: signupPassword.value,
  };
  if(!checkuser()){
    registeredusers.push(obj);
    localStorage.setItem("registeredusers", JSON.stringify(registeredusers));
    alert("Registration Successful");
  }
  else{
    alert("User already exists");
  }

});
loginBtn.addEventListener("click", () => {
    const user = registeredusers.find((user) => user.email === loginEmail.value);
    if(user){
        if(user.password === loginPassword.value){
            localStorage.setItem("currentUser", user.myname);
            localStorage.setItem("password", user.password);
            localStorage.setItem("email", user.email);
             window.location.href = "../pages/profilepage.html";
        }
        else{
            alert("Invalid Password");
        }
    }
    else{
        alert("User does not exist");
    }

})

//   const user = logindetails.find((user) => user.username === obj.username);
//   if (user) {
//     if (user.password === obj.password) {
//       localStorage.setItem("currentUser", obj.username);
//       window.location.href = "../pages/index.html";
//     } else {
//       alert("Invalid Password");
//     }
//   } else {
//     logindetails.push(obj);
//     localStorage.setItem("logindetails", JSON.stringify(logindetails));
//     localStorage.setItem("currentUser", obj.username);
//     window.location.href = "../pages/index.html";
//   }
// });