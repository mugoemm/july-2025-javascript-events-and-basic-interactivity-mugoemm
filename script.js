// ==========================
// Part 1: Event Handling
// ==========================
const toggleBtn = document.getElementById("toggleMessageBtn");
const message = document.getElementById("message");

toggleBtn.addEventListener("click", () => {
  message.style.display = (message.style.display === "none") ? "block" : "none";
});

// ==========================
// Part 2: Interactive Elements
// ==========================

// Light/Dark Mode
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increase").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

// ==========================
// Part 3: Form Validation
// ==========================
const signupForm = document.getElementById("signupForm");
const feedback = document.getElementById("formFeedback");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Validation checks
  if (name === "") {
    feedback.textContent = "❌ Name cannot be empty.";
    feedback.style.color = "red";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    feedback.textContent = "❌ Enter a valid email.";
    feedback.style.color = "red";
    return;
  }

  if (password.length < 6) {
    feedback.textContent = "❌ Password must be at least 6 characters.";
    feedback.style.color = "red";
    return;
  }

  // Success
  feedback.textContent = "✅ Form submitted successfully!";
  feedback.style.color = "green";
  signupForm.reset();
});

