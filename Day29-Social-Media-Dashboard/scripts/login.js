let username = document.querySelector(".username");
let password = document.querySelector(".password");
let btn = document.querySelector(".btn");
let logindetails = JSON.parse(localStorage.getItem("logindetails")) || [];
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const obj = {
    username: username.value,
    password: password.value,
  };
  const user = logindetails.find((user) => user.username === obj.username);
  if (user) {
    if (user.password === obj.password) {
      localStorage.setItem("currentUser", obj.username);
      window.location.href = "../pages/index.html";
    } else {
      alert("Invalid Password");
    }
  } else {
    logindetails.push(obj);
    localStorage.setItem("logindetails", JSON.stringify(logindetails));
    localStorage.setItem("currentUser", obj.username);
    window.location.href = "../pages/index.html";
  }
});
