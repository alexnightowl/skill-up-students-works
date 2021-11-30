let currentWindowHeight = window.innerHeight;

let futterJumpValue = currentWindowHeight * -0.44 - 20 + "px";
let navJumpValue = currentWindowHeight * 0.06 + 32 + "px";

document.documentElement.style.setProperty(
  "--footterjumpvalue",
  futterJumpValue
);
document.documentElement.style.setProperty("--navjumpvalue", navJumpValue);

window.addEventListener("resize", function vpchupdate() {
  let currentWindowHeight = window.innerHeight;

  let futterJumpValue = currentWindowHeight * -0.44 - 20 + "px";
  let navJumpValue = currentWindowHeight * 0.06 + 32 + "px";

  document.documentElement.style.setProperty(
    "--footterjumpvalue",
    futterJumpValue
  );
  document.documentElement.style.setProperty("--navjumpvalue", navJumpValue);

  console.log(futterJumpValue);
  console.log(navJumpValue);
});
