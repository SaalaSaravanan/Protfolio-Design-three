var typed = new Typed("#element", {
  strings: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
  typeSpeed: 50,
  loop: true,
});

const sidebar = document.querySelector(".sidebar");
const option = document.querySelector(".option");
const close = document.querySelector(".close");

const toggleSidebar = () => {
  sidebar.classList.toggle("show");

  if (sidebar.classList.contains("show")) {
    option.style.display = "none";
    close.style.display = "block";
  } else {
    option.style.display = "block";
    close.style.display = "none";
  }
};

