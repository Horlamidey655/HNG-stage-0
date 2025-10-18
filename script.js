// Profile Card JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const timeElement = document.getElementById("current-time");

  function updateTime() {
    const currentTime = Date.now();
    timeElement.textContent = `Current time: ${currentTime} ms`;
  }

  updateTime();

  setInterval(updateTime, 1000);

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
});
