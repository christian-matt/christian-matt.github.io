(function () {
  "use strict";

  var toggle = document.getElementById("menuToggle");
  var navigation = document.getElementById("navLinks");

  if (toggle && navigation) {
    function closeMenu() {
      navigation.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var isOpen = navigation.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navigation.addEventListener("click", closeMenu);

    document.addEventListener("click", function (event) {
      if (!navigation.contains(event.target) && !toggle.contains(event.target)) {
        closeMenu();
      }
    });

    window.addEventListener("scroll", closeMenu, { passive: true });
  }

  document.querySelectorAll("[data-current-year]").forEach(function (element) {
    element.textContent = String(new Date().getFullYear());
  });

  var form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    function value(id) {
      var element = document.getElementById(id);
      return element ? element.value.trim() : "";
    }

    var language = form.dataset.language || "de";
    var recipient = form.dataset.recipient;
    var prefix = form.dataset.subjectPrefix || "Enquiry";
    var labels = language === "de"
      ? { name: "Name", email: "E-Mail", org: "Organisation", topic: "Anliegen", message: "Nachricht" }
      : { name: "Name", email: "Email", org: "Organisation", topic: "Enquiry", message: "Message" };

    var subject = prefix + ": " + value("topic") + " – " + value("name");
    var body = labels.name + ": " + value("name") + "\n" +
      labels.email + ": " + value("email") + "\n" +
      labels.org + ": " + value("org") + "\n" +
      labels.topic + ": " + value("topic") + "\n\n" +
      labels.message + ":\n" + value("msg");

    window.location.href = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    var note = document.getElementById("formNote");
    if (note && form.dataset.success) note.textContent = form.dataset.success;
  });
}());
