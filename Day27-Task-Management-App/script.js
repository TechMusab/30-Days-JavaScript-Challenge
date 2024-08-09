let arr = [];
let arrdate = [];
display();
function addToDO() {
  let taskValue = document.querySelector(".todoinput").value;
  let dateValue = document.querySelector(".date").value;
  if (taskValue == "" || dateValue == "") {
    alert("Please Enter The Required Fields");
    return;
  }
  arr.push(taskValue);
  arrdate.push(dateValue);
  console.log(taskValue);
  localStorage.setItem("arr", JSON.stringify(arr));
  localStorage.setItem("arrdate", JSON.stringify(arrdate));
  display();
}

function display() {
  let divelement = document.querySelector(".div1");
  let newhtml = " ";
  arrlocal = JSON.parse(localStorage.getItem("arr"));
  arrdatelocal = JSON.parse(localStorage.getItem("arrdate"));
  for (let i = 0; i < arrlocal.length; i++) {
    newhtml += `
    <span class="task">${arrlocal[i]}</span>
    <span class="datepara">${arrdatelocal[i]}</span>
    <button class="deletebtn" onclick=" 
    arrlocal.splice(${i},1);
    arrdatelocal.splice(${i},1);
    localStorage.setItem('arr', JSON.stringify(arrlocal));
    localStorage.setItem('arrdate',JSON.stringify(arrdatelocal));
    display();
    ">Delete</button>
    `;
    document.querySelector(".todoinput").value = "";
    document.querySelector(".date").value = "";
  }
  divelement.innerHTML = newhtml;
}
