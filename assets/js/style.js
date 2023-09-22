document.getElementById("btn").addEventListener("click", click);

// Infor Input First Name

document.getElementById("btn").addEventListener("click", close);

// Infor Input Lirst Name

document.getElementById("btn").addEventListener("click", send);

// Infor Input Email

document.getElementById("btn").addEventListener("click", onafterprint);

// Infor Input Password


// Infor First Name

function click() {
    let inforFirst = document.getElementById("first");

    if (!first.value == "") {
        document.getElementById("error-msg").innerHTML = "";
    } else {
        document.getElementById("error-msg").innerHTML = "First Name cannot be empty";
    }
    first.style.outline = "1px solid red"
}

// Infor Lirst Name

function close() {
    let inforLest = document.getElementById("text")

    if (!text.value == "") {
        document.getElementById("error-text").innerHTML = "";
    } else {
        document.getElementById("error-text").innerHTML = "Last Name cannot be empty";
    }
    text.style.outline = "1px solid red"
}

// Infor  Email

function send() {
    let intorForm = document.getElementById("email");

    if (!email.value == "") {
        document.getElementById("msg").innerHTML = "";
    } else {
        document.getElementById("msg").innerHTML = "Looks Name cannot be empty";
    }
    email.style.outline = "1px solid red"
}

// Infor  Password

function onafterprint() {
    let password = document.getElementById("password")

    if (!password.value == "") {
        document.getElementById("password-msg").innerHTML = "";
    } else {
        document.getElementById("password-msg").innerHTML = "Password Name cannot be empty"
    }
    password.style.outline = "1px solid red";
}