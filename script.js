document.addEventListener("DOMContentLoaded", function () {
  const sections = ["home", "about", "experience", "education", "creations"];
  let currentSection = "home";

  // Navigation link handling
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const section = this.dataset.section;
      showSection(section);
    });
  });

  // Arrow navigation handling
  document.querySelectorAll(".nav-arrow").forEach((arrow) => {
    arrow.addEventListener("click", function () {
      const direction = this.dataset.direction;
      navigateSection(direction);
    });
  });

  // Add click event listeners for the gif-container and h2
  const gifContainer = document.querySelector(".gif-container");
  const welcomeText = document.querySelector(".welcome-container h2");

  [gifContainer, welcomeText].forEach((element) => {
    element.addEventListener("click", function () {
      showSection("about");
    });
  });

  // Add click event listener for the h1 to navigate to "home"
  const headerTitle = document.querySelector("header h1");
  headerTitle.addEventListener("click", function () {
    showSection("home");
  });

  function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll(".section").forEach((section) => {
      section.classList.remove("active");
    });

    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add("active");
      currentSection = sectionId;
    }

    // Update active navigation link
    updateActiveLink(sectionId);
  }

  function navigateSection(direction) {
    const currentIndex = sections.indexOf(currentSection);
    let nextIndex;

    if (direction === "next") {
      nextIndex = (currentIndex + 1) % sections.length;
    } else {
      nextIndex = (currentIndex - 1 + sections.length) % sections.length;
    }

    showSection(sections[nextIndex]);
  }

  function updateActiveLink(activeSection) {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active-link"); // Remove active class from all links
      if (link.dataset.section === activeSection) {
        link.classList.add("active-link"); // Add active class to the current link
      }
    });
  }
});
