document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    const username = form.querySelector('input[name="username"]').value;
    const password = form.querySelector('input[name="password"]').value;

    if (!username || !password) {
      event.preventDefault(); // Prevent form submission
      alert("Please enter username and password.");
    }
  });
});
