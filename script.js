document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");

    const adminBtn = document.getElementById("adminBtn");
    const clientBtn = document.getElementById("clientBtn");

    const nameField = document.getElementById("nameField");
    const passwordField = document.getElementById("passwordField");

    let loginType = "admin";

    // Admin Login Button
    adminBtn.addEventListener("click", function () {

        loginType = "admin";

        adminBtn.classList.add("active");
        clientBtn.classList.remove("active");

        nameField.style.display = "none";
        passwordField.style.display = "block";

        document.getElementById("password").required = true;
        document.getElementById("name").required = false;

        errorMessage.textContent = "";

    });

    // Client Login Button
    clientBtn.addEventListener("click", function () {

        loginType = "client";

        clientBtn.classList.add("active");
        adminBtn.classList.remove("active");

        nameField.style.display = "block";
        passwordField.style.display = "none";

        document.getElementById("password").required = false;
        document.getElementById("name").required = true;

        errorMessage.textContent = "";

    });

    // Login Form
    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();

        if (loginType === "admin") {

            const password = document.getElementById("password").value.trim();

            if (
                email === "gdc2028@gmail.com" &&
                password === "GdcDemo@1514"
            ) {

                errorMessage.style.color = "green";
                errorMessage.textContent = "Authenticating...";

                setTimeout(function () {
                    window.location.href = "home.html";
                }, 1000);

            } else {

                errorMessage.style.color = "red";
                errorMessage.textContent = "Invalid Email or Password";

            }

        } else {

            const name = document.getElementById("name").value.trim();

            if (name === "") {

                errorMessage.style.color = "red";
                errorMessage.textContent = "Please enter your Name";
                return;

            }

            if (email === "") {

                errorMessage.style.color = "red";
                errorMessage.textContent = "Please enter your Email";
                return;

            }

            // Save client information
            localStorage.setItem("clientName", name);
            localStorage.setItem("clientEmail", email);

            errorMessage.style.color = "green";
            errorMessage.textContent = "Welcome " + name + "...";

            setTimeout(function () {
                window.location.href = "home.html";
            }, 1000);

        }

    });

});