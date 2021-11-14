var myMenu = document.querySelector(".menu");
var menuSpreader = document.querySelector("#menuspreader");

menuSpreader.addEventListener("click", function menuSpreading() {
  let screenWidth = window.innerWidth;
  if (screenWidth <= 768) {
    myMenu.classList.toggle("spreaded");
  }
});

window.addEventListener("resize", function () {
  let screenWidth = window.innerWidth;
  if (screenWidth > 768) {
    myMenu.classList.remove("spreaded");
  }
});

var buttonPrevius = document.querySelector("#workprev");
var buttonNext = document.querySelector("#worknext");
var workImage = document.querySelector("#workimage");
var workLink = document.querySelector("#workimagelink");

var workExamplesImages = [
  "index.files/workexample1.gif",
  "index.files/workexample2.gif",
];

var workExamplesLinks = ["JS_Сlock/index.html", "JS_Pratice/index.html"];

var imageIndex = 0;
var imageLinkIndex = 0;
workImage.src = `${workExamplesImages[0]}`;
workLink.href = `${workExamplesLinks[0]}`;

buttonNext.addEventListener("click", function slider() {
  imageIndex++;
  imageLinkIndex++;

  if (imageIndex > workExamplesImages.length - 1) {
    imageIndex = 0;
  }

  if (imageLinkIndex > workExamplesLinks.length - 1) {
    imageLinkIndex = 0;
  }

  workImage.src = `${workExamplesImages[imageIndex]}`;
  workLink.href = `${workExamplesLinks[imageLinkIndex]}`;
});

buttonPrevius.addEventListener("click", function slider() {
  imageIndex--;
  imageLinkIndex--;

  if (imageIndex < 0) {
    imageIndex = workExamplesImages.length - 1;
  }

  if (imageLinkIndex < 0) {
    imageLinkIndex = workExamplesLinks.length - 1;
  }

  workImage.src = `${workExamplesImages[imageIndex]}`;
  workLink.href = `${workExamplesLinks[imageLinkIndex]}`;
});

function sliderOnTimeChange() {
  imageIndex++;
  imageLinkIndex++;

  if (imageIndex > workExamplesImages.length - 1) {
    imageIndex = 0;
  }

  if (imageLinkIndex > workExamplesLinks.length - 1) {
    imageLinkIndex = 0;
  }

  workImage.src = `${workExamplesImages[imageIndex]}`;
  workLink.href = `${workExamplesLinks[imageLinkIndex]}`;
}

setInterval(sliderOnTimeChange, 25000);
