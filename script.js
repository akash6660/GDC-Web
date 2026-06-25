document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Demo Credentials
        const validEmail = "gdc2028@gmail.com";
        const validPassword = "GdcDemo@1514";

        if (email === validEmail && password === validPassword) {
            errorMessage.style.color = "green";
            errorMessage.textContent = "Authenticating...";

            // Redirect after 1 second
            setTimeout(() => {
                window.location.href = "home.html";
            }, 1000);

        } else {
            errorMessage.style.color = "red";
            errorMessage.textContent = "Invalid email or password!";
        }
    });
});