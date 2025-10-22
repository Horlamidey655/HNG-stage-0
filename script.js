const inputs = document.querySelectorAll(".form-input");
const btnSubmit = document.querySelector(".btn");
const form = document.querySelector(".form");
const successMessage = document.getElementById("success");

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const checkInput = (e) => {
  e.preventDefault();
  let allFieldsValid = true;

  inputs.forEach((inputContainer) => {
    const inputElement =
      inputContainer.querySelector("input") ||
      inputContainer.querySelector("textarea");
    const errorElement = inputContainer.querySelector("p");

    const fieldId = inputElement.getAttribute("id");
    const fieldName = fieldId ? fieldId.replace("-", " ") : "field";

    errorElement.textContent = "";
    errorElement.style.display = "none";
    inputElement.style.borderColor = "grey";
    inputElement.style.borderWidth = "1px";

    if (!inputElement.value.trim()) {
      errorElement.textContent = `Kindly enter your ${fieldName}`;
      errorElement.style.display = "block";
      errorElement.style.color = "red";
      inputElement.style.borderColor = "red";
      inputElement.style.borderWidth = "2px";
      allFieldsValid = false;
    } else if (fieldId === "email" && !isValidEmail(inputElement.value)) {
      errorElement.textContent =
        "Please enter a valid email address (name@example.com)";
      errorElement.style.display = "block";
      errorElement.style.color = "red";
      inputElement.style.borderColor = "red";
      inputElement.style.borderWidth = "2px";
      allFieldsValid = false;
    } else if (fieldId === "message" && inputElement.value.trim().length < 10) {
      errorElement.textContent = "Message must be at least 10 characters long";
      errorElement.style.display = "block";
      errorElement.style.color = "red";
      inputElement.style.borderColor = "red";
      inputElement.style.borderWidth = "2px";
      allFieldsValid = false;
    } else {
      inputElement.style.borderColor = "green";
      inputElement.style.borderWidth = "1px";
      console.log(`${fieldName} is valid`);
    }
  });

  if (allFieldsValid) {
    successMessage.style.display = "grid";
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 2000);

    form.reset();
  }
};

btnSubmit.addEventListener("click", checkInput);

const socialLinks = document.querySelectorAll(".social-link");
socialLinks.forEach((link) => {
  link.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      this.click();
    }
  });
});

const focusableElements = document.querySelectorAll("a, button, [tabindex]");
focusableElements.forEach((element) => {
  element.addEventListener("focus", function () {
    this.style.outline = "2px solid #007bff";
    this.style.outlineOffset = "2px";
  });

  element.addEventListener("blur", function () {
    this.style.outline = "none";
  });
});
