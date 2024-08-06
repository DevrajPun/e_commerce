document.querySelectorAll(".star").forEach((star) => {
  star.addEventListener("click", () => {
    const value = star.getAttribute("data-value");
    document.querySelectorAll(".star").forEach((s) => {
      s.classList.remove("selected");
      if (s.getAttribute("data-value") <= value) {
        s.classList.add("selected");
      }
    });
  });
});
