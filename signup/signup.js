const username = document.getElementById("username");
const password = document.getElementById("password");
const cnfpassword = document.getElementById("crfpassword");
const signup = document.getElementById("signup");
const email = document.getElementById("email");
signup.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value === "") {
    alert("add a  username");
  } else if (email.value === "") {
    alert("enter a valid email");
  } else if (password.value === "") {
    alert("enter a valid password");
  }
  if (password.value !== cnfpassword.value) {
    alert("check both passwords");
  }

  window.location.assign(login.html);
});

// if (username.value === "" || password === "" || cnfpassword === "" ||email ==="") {
//     if (username.value === "") {
//       let text = document.getElementById('usernamedemo');
//       text.innerText = "username invalid"
//       username.insertAdjacentElement("afterend", text);
//     }
//     if(password.value === ""){
//         let text = document.getElementById('passworddemo');
//         text.innerText = "password invalid"
//         password.insertAdjacentElement("afterend", text);

//     }
//     if(email.value === ""){
//       let textalert = document.getElementById('emaildemo');
//       textalert.innerText = "invalid email";
//       email.insertAdjacentElement("afterend", textalert);
//   }

//   }
//   else{
//     if(password.value === cnfpassword.value){
//         let userId = Math.floor(Math.random()*35651);
//         let userData = {
//             id : userId,
//             username:username.value,
//             password:password.value,
//         }
//         localStorage.setItem(userId,JSON.stringify(userData));
//         username.value ="";
//         password.value="";
//         cnfpassword.value="";
//         email.value="";
//         alert('user successfully added');

//     }else {
//         alert("Enter password and confirm password as same");
//       }
//   }
