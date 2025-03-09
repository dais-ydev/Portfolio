const videoWraps = document.querySelectorAll(".video-wrap-js");
console.log(videoWraps);

const videoWrapsNav = document.querySelectorAll(".portfolio nav ul li input");

let navIndex = 0;
videoWrapsNav[navIndex].checked = true;
wrapSelector()
function wrapSelector() {
  videoWrapsNav.forEach((input) => {
    if(input.checked) {
      console.log(input.value);
      navIndex = input.value;
      videoWraps.forEach((wrap) => {
        wrap.style.display = "none";
      })
      videoWraps[navIndex].style.display = "flex";
    } 
  })
}

videoWrapsNav.forEach((input) => {
  input.addEventListener("click", wrapSelector)
}) 