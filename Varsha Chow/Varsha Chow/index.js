const menuToggle = document.getElementById("menu-toggle");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-btn");

// Open Overlay Menu
menuToggle.addEventListener("click", () => {
  overlay.classList.add("active");
});

// Close Overlay Menu
closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});

// Close menu when clicking outside of it
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.classList.remove("active");
  }
});

// Registration form

function validateAndRegister() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let dob = document.getElementById("dob").value;
  let gender = document.getElementById("gender").value;
  let phone = document.getElementById("phone").value.trim();

  let isValid = true;

  document.getElementById("nameError").innerText = name
    ? ""
    : "Name is required!";
  if (!name) isValid = false;

  document.getElementById("emailError").innerText =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Invalid email format!";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) isValid = false;

  document.getElementById("passwordError").innerText =
    password.length >= 6 ? "" : "Password must be at least 6 characters!";
  if (password.length < 6) isValid = false;

  document.getElementById("confirmPasswordError").innerText =
    password === confirmPassword ? "" : "Passwords do not match!";
  if (password !== confirmPassword) isValid = false;

  document.getElementById("dobError").innerText = dob
    ? ""
    : "Date of Birth is required!";
  if (!dob) isValid = false;

  document.getElementById("genderError").innerText = gender
    ? ""
    : "Please select a gender!";
  if (!gender) isValid = false;

  document.getElementById("phoneError").innerText = /^\d{10}$/.test(phone)
    ? ""
    : "Enter a valid 10-digit phone number!";
  if (!/^\d{10}$/.test(phone)) isValid = false;

  if (isValid) {
    let userData = { name, email, dob, gender, phone };
    localStorage.setItem("registeredUser", JSON.stringify(userData));

    // Show success popup
    document.getElementById("successPopup").style.display = "block";

    // Clear form fields
    document.getElementById("registrationForm").reset();

    // Navigate to index.html after 2 seconds
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  }
}

function closePopup() {
  document.getElementById("successPopup").style.display = "none";
}

// login page
