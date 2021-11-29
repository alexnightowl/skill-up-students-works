var logosWrapper = document.querySelector("#wrapper");
var allLogos = document.getElementsByClassName("round-wrapper");

window.addEventListener("load", function () {
  logosWrapper.style.height = logosWrapper.clientWidth + "px";

  for (let i = 1; i < allLogos.length; i++) {
    allLogos[i].style.height = logosWrapper.clientWidth * 0.25 + "px";
    allLogos[i].style.width = logosWrapper.clientWidth * 0.25 + "px";
  }

  allLogos[0].style.height = logosWrapper.clientWidth * 0.3 + "px";
  allLogos[0].style.width = logosWrapper.clientWidth * 0.3 + "px";
});

window.addEventListener("resize", function () {
  logosWrapper.style.height = logosWrapper.clientWidth + "px";

  for (let i = 1; i < allLogos.length; i++) {
    allLogos[i].style.height = logosWrapper.clientWidth * 0.25 + "px";
    allLogos[i].style.width = logosWrapper.clientWidth * 0.25 + "px";
  }

  allLogos[0].style.height = logosWrapper.clientWidth * 0.3 + "px";
  allLogos[0].style.width = logosWrapper.clientWidth * 0.3 + "px";
});
