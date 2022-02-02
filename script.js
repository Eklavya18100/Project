// Project1 Begins

function project1() {
  console.log("hello");
  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let password1 = document.getElementById("password1");
  let password2 = document.getElementById("password2");
  let submit = document.getElementById("submission");
  let a = [username, email, password1, password2];

  function showError(input, message) {
    input.className = "form-control error";
    input.parentElement.children[2].className = "form-text error";
    input.parentElement.children[2].innerText = message;
  }

  function showSuccess(input) {
    input.className = "form-control success";
    input.parentElement.children[2].className = "form-text";
  }

  function checkRequired(a) {
    a.forEach((ele) => {
      if (ele.value.trim() === "") {
        showError(
          ele,
          `${ele.parentElement.children[0].innerText} is required`
        );
      } else {
        showSuccess(ele);
      }
    });
  }

  function checkUsername(input, min, max) {
    if (input.value < min || input.value > max) {
      showError(input, `Username length should be between ${min} and ${max}`);
    }
  }

  function checkEmail(input) {
    if (
      !String(input.value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      showError(email, "Enter a valid email");
    }
  }

  function checkPassword(p1, p2) {
    if (p1.value !== p2.value) {
      showError(p2, "Passwords do not match");
    }
  }
  submit.addEventListener("click", (e) => {
    checkRequired(a);
    checkUsername(username, 3, 10);
    checkEmail(email);
    checkPassword(password1, password2);
    e.preventDefault();
  });
}
project1();
// Project1 Ends

// Project2 Begins
function project2(){
let seats = document.getElementById("seats");
let seat = document.querySelectorAll(".row1 .seat");
let total1 = document.getElementById("total1");
let money1 = document.getElementById("money1");
let movie = document.getElementById("movie");

let ticketPrice = +movie.value;

let a = [];
function updatePrice() {
  
  a = [];
  console.log(document.querySelectorAll(".row1"))
  let length = document.querySelectorAll(".row1 .seat.selected").length;
  let b = [...seat];
  total1.innerText = length;
  console.log(total1.innerText);
  money1.innerText = length * ticketPrice;
  b.forEach((ele) => {
    if (ele.classList.contains("selected")) {
      a.push(b.indexOf(ele));
    }
  });
  localStorage.setItem("selectedSeats", JSON.stringify(a));
}
function populateUI() {
  a = JSON.parse(localStorage.getItem("selectedSeats"));
  let b = [...seat];
  a.forEach((ele) => {
    b[ele].classList.add("selected");
  });
}

seats.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updatePrice();
  }
});
movie.addEventListener("change", (e) => {
  ticketPrice = e.target.value;
  updatePrice();
});
populateUI();
updatePrice();
}
project2();