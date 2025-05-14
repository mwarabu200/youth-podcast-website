document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Thanks for reaching out, " + name + "! We’ll get back to you soon.");
});

// Toggle mobile menu
document.getElementById("menu-toggle")?.addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("show");
});
