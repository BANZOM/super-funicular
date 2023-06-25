// javascript code to toggle class
document.querySelectorAll('.header .btn').forEach(function (button) {
    button.addEventListener('click', function () {
        this.classList.toggle('click');
        document.querySelector('.header .sidebar').classList.toggle('show');
    });
});

function viewHidden() {
    var hiddenElements = document.querySelectorAll('.blog-card');
    for (var i = 3; i < hiddenElements.length; i++) {
        if (hiddenElements[i].hidden == true) {
            hiddenElements[i].hidden = false;
            // console.log(hiddenElements[i].hidden);
            // changing the content to NO more Articles
            document.querySelector('.articles p').innerHTML = "No More Articles";

        }
        else {
            hiddenElements[i].hidden = true;
            document.querySelector('.articles p').innerHTML = "View More Articles";
        }
    }
}

function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if all fields are filled
    if (!username || !email || !password) {
        alert("Please fill out all fields.");
        return false;
    }

    // Check if username is alphanumeric
    const usernameRegex = /^[a-zA-Z0-9]{3,16}$/;
    if (!usernameRegex.test(username)) {
        alert("Username must be alphanumeric.");
        return false;
    }

    // Check if email is valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Check if password is at least 8 characters long
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    // Check if password contains at least one number and one letter
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must contain at least one number and one letter.");
        return false;
    }

    return alert("Form submitted.");
}
