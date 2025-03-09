const softwareIcons = document.querySelectorAll(".software-icon-js li");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate"); // Add a class when visible
    }
  });
}, { threshold: 0.5 }); // Trigger when 50% is visible

softwareIcons.forEach((el) => observer.observe(el));

const spanElements = document.querySelectorAll('.direct')

console.log(spanElements)

const grapObserver = new IntersectionObserver ((entries) => {entries.forEach((entry) => {
  let delay = 0;
  if (entry.isIntersecting) {
    entry.target.style.animation = `backgroundFill 1s ease ${delay}s forwards`
  }
  delay += 0.7;

})}, {threshold: 1})

spanElements.forEach((el) => grapObserver.observe(el));
