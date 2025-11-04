// elements
const navbar = document.querySelector("#navbar");
const doubts = document.querySelectorAll(".doubt-section");

// events
doubts.forEach((doubt) => {
  doubt.addEventListener("click", () => {
    const response = doubt.nextElementSibling;

    if (response.style.display === "block") {
      response.style.display = "none";
    } else {
      response.style.display = "block";
    }
  });
});
