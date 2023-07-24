function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "gaurav" && password === "gaurav123") {
    // Authentication successful;
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
}
