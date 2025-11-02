const hamber = document.querySelector(".humburger");
  const drawer = document.querySelector(".mobile-nav");
  const closeBtn = document.getElementById('close-btn')

  hamber.addEventListener("click", () => {
    hamber.classList.toggle("active");
    drawer.classList.toggle("open");
  });

  // Close drawer when clicking outside of it
  
  closeBtn.addEventListener("click", (e) => {
    // if (e.target === drawer) {
      drawer.classList.remove("open");
      hamber.classList.remove("active");
    // }
  });