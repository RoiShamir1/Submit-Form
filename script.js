document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent form submission
    const username = form.querySelector("#username").value;
    const email = form.querySelector("#email").value;
    const password = form.querySelector("#password").value;
    const passwordConfirm = form.querySelector("#password_confirm").value;

    let errorMessage = "";

    if (username.length < 3) {
      errorMessage = "Username must be at least 3 characters long.";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      errorMessage = "Invalid email address.";
    } else if (password.length < 8) {
      errorMessage = "Password must be at least 8 characters long.";
    } else if (password !== passwordConfirm) {
      errorMessage = "Passwords do not match.";
    }

    if (errorMessage) {
      alert(errorMessage);
    } else {
      // if form is valid, you can submit it to the server
      form.submit();
    }
  });
});
