const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#site-nav");
const navLinks = document.querySelectorAll("#site-nav a");
const contactForm = document.querySelector(".contact-form");
const statusMessage = document.querySelector(".form-status");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("nav-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.querySelector(".menu-icon").textContent = isOpen ? "Close" : "Menu";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("nav-open");
    menuButton?.setAttribute("aria-expanded", "false");
    const icon = menuButton?.querySelector(".menu-icon");
    if (icon) icon.textContent = "Menu";
  });
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) {
    return;
  }

  statusMessage.hidden = false;
  statusMessage.textContent =
    "Thank you. Your consultation request is ready to be connected to your CRM or email workflow.";
  contactForm.reset();
});

window.addEventListener("error", () => {
  document.body.classList.add("script-error");
});
