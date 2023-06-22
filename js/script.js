var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("active");
})

function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!username || !email || !password) {
      alert("Please fill out all fields.");
      return false;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }

    return true;
  }