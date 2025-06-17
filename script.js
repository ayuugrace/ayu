// File: js/scripts.js

// Animasi loading: sembunyikan overlay loading setelah halaman selesai dimuat
window.onload = function () {
  const loading = document.getElementById("loading");
  if (loading) {
    loading.style.opacity = "0";
    setTimeout(() => {
      loading.style.display = "none";
    }, 600);
  }
};

// Validasi form hanya aktif di halaman form.html
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    // Validasi Password
    const passwordInput = document.getElementById("passwordInput");
    const passwordHelp = document.getElementById("passwordHelp");
    passwordHelp.textContent = "";
    const pwdVal = passwordInput.value;
    const pwdErrMsg =
      "Password must be minimum 8 characters, include uppercase, lowercase, and number.";
    if (
      pwdVal.length < 8 ||
      !/[A-Z]/.test(pwdVal) ||
      !/[a-z]/.test(pwdVal) ||
      !/[0-9]/.test(pwdVal)
    ) {
      passwordHelp.textContent = pwdErrMsg;
      valid = false;
    }

    // Validasi Text Input (Nama)
    const textInput = document.getElementById("textInput");
    const textHelp = document.getElementById("textHelp");
    textHelp.textContent = "";
    if (textInput.value.length < 5 || textInput.value.length > 20) {
      textHelp.textContent = "Name must be between 5 and 20 characters.";
      valid = false;
    }

    // Validasi Email
    const emailInput = document.getElementById("emailInput");
    const emailHelp = document.getElementById("emailHelp");
    emailHelp.textContent = "";
    // Regex validasi email sederhana
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      emailHelp.textContent = "Please enter a valid email address.";
      valid = false;
    }

    if (valid) {
      alert(
        "Booking submitted successfully!\nThank you for choosing Tour & Travel."
      );
      bookingForm.reset();
    }
  });
}
