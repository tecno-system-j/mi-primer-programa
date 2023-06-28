document.addEventListener("DOMContentLoaded", function () {
  const accordionTitles = document.querySelectorAll(".accordion-title");

  accordionTitles.forEach(function (title) {
    title.addEventListener("click", function () {
      const accordionItem = this.parentNode;
      const accordionContent = this.nextElementSibling;

      accordionItem.classList.toggle("active");
      accordionContent.style.display =
        accordionContent.style.display === "block" ? "none" : "block";
    });
  });
});
