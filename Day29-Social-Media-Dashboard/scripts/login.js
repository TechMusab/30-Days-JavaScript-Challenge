let username = document.querySelector(".username");
let password = document.querySelector(".password");
let btn = document.querySelector(".btn");
let logindetails = [];
btn.addEventListener("click", () => {
  const obj = {
    username: username.value,
    password: password.value,
  };
  logindetails.push(obj);
  localStorage.setItem("logindetails", JSON.stringify(logindetails));
});
