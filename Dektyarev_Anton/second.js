let currentWindowHeight = window.innerHeight;
let currentWindowWidth = window.innerWidth;
let futterJumpValue;
let navJumpValue;

if (currentWindowWidth > 768) {
  futterJumpValue = currentWindowHeight * -0.5 + 20 + 8 + "px";
  navJumpValue = currentWindowHeight * 0.5 - 244 + "px";
} else {
  futterJumpValue = currentWindowHeight * -0.5 + 20 + 64 + 8 + "px";
  navJumpValue = currentWindowHeight * 0.5 - 244 + "px";
}

document.documentElement.style.setProperty(
  "--footterjumpvalue",
  futterJumpValue
);
document.documentElement.style.setProperty("--navjumpvalue", navJumpValue);
console.log(futterJumpValue);
console.log(navJumpValue);

window.addEventListener("resize", function vpchupdate() {
  let currentWindowHeight = window.innerHeight;
  let currentWindowWidth = window.innerWidth;
  let futterJumpValue;
  let navJumpValue;

  if (currentWindowWidth > 768) {
    futterJumpValue = currentWindowHeight * -0.5 + 20 + 8 + "px";
    navJumpValue = currentWindowHeight * 0.5 - 244 + "px";
  } else {
    futterJumpValue = currentWindowHeight * -0.5 + 20 + 64 + 8 + "px";
    navJumpValue = currentWindowHeight * 0.5 - 244 + "px";
  }

  document.documentElement.style.setProperty(
    "--footterjumpvalue",
    futterJumpValue
  );
  document.documentElement.style.setProperty("--navjumpvalue", navJumpValue);

  console.log(futterJumpValue);
  console.log(navJumpValue);
});
