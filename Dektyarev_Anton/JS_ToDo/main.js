var mainParagraph = document.querySelector("#mainparagraph");
var toDoText = document.querySelector("#todotext");
var toDoForm = document.querySelector("#todoform");
var toDosBox = document.querySelector("#todos-box");
var divToDo = document.querySelector(".todos");

if (localStorage.getItem("save") != null) {
  toDosBox.innerHTML = localStorage.getItem("save");
}

var toDoDelete = document.getElementsByClassName("delete-button");
var toDoDoneStatusMarker = document.getElementsByClassName("todo-marker");

for (let i = 0; i < toDoDelete.length; i++) {
  toDoDelete[i] = toDoDelete[i].addEventListener("click", function (event) {
    let parentOfDeleteButton = event.target.parentElement;
    parentOfDeleteButton.remove();

    let save = toDosBox.innerHTML;
    localStorage.setItem("save", save);
  });
}

for (let i = 0; i < toDoDoneStatusMarker.length; i++) {
  toDoDoneStatusMarker[i] = toDoDoneStatusMarker[i].addEventListener(
    "input",
    function (event) {
      event.target.parentElement.classList.toggle("checked");

      if (event.target.hasAttribute("checked")) {
        event.target.removeAttribute("checked");
      } else event.target.setAttribute("checked", "checked");

      let save = toDosBox.innerHTML;
      localStorage.setItem("save", save);
    }
  );
}

toDoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (toDoText.value == "") {
    return;
  }

  let divToDo = document.createElement("div");
  divToDo.innerHTML = `<p class="todo-inner-text">${toDoText.value}</p>`;
  divToDo.classList.add("todos");

  let toDoDelete = document.createElement("button");
  toDoDelete.innerHTML = "Delete";
  toDoDelete.classList.add("delete-button");

  let toDoDoneStatusMarker = document.createElement("input");
  toDoDoneStatusMarker.setAttribute("type", "checkbox");
  toDoDoneStatusMarker.classList.add("todo-marker");

  let toDoTimeInfo = document.createElement("span");
  toDoTimeInfo.setAttribute("class", "time-registration");

  let currentDate = new Date();

  let currentHour = currentDate.getHours();
  if (currentHour < 10) {
    currentHour = "0" + currentHour;
  }

  let currentMinute = currentDate.getMinutes();
  if (currentMinute < 10) {
    currentMinute = "0" + currentMinute;
  }

  let currentSecond = currentDate.getSeconds();
  if (currentSecond < 10) {
    currentSecond = "0" + currentSecond;
  }

  let currentDayOfMonth = currentDate.getDate();
  if (currentDayOfMonth < 10) {
    currentDayOfMonth = "0" + currentDayOfMonth;
  }

  let currentMonth = currentDate.getMonth();
  if (currentMonth < 10) {
    currentMonth = "0" + currentMonth;
  }

  let currentYear = currentDate.getFullYear();

  toDoTimeInfo.innerText = `${currentHour}:${currentMinute}:${currentSecond} ${currentDayOfMonth}.${currentMonth}.${currentYear}`;

  toDosBox.appendChild(divToDo);
  divToDo.appendChild(toDoDelete);
  divToDo.appendChild(toDoDoneStatusMarker);
  divToDo.appendChild(toDoTimeInfo);

  toDoText.value = "";

  mainParagraph.style.transition = "2s";
  mainParagraph.style.color = "yellow";
  setTimeout(function () {
    mainParagraph.style.color = "white";
  }, 1500);

  toDoDelete.addEventListener("click", function (event) {
    let parentOfDeleteButton = event.target.parentElement;
    parentOfDeleteButton.remove();

    let save = toDosBox.innerHTML;
    localStorage.setItem("save", save);
  });

  toDoDoneStatusMarker.addEventListener("input", function (event) {
    divToDo.classList.toggle("checked");

    if (toDoDoneStatusMarker.hasAttribute("checked")) {
      toDoDoneStatusMarker.removeAttribute("checked");
    } else toDoDoneStatusMarker.setAttribute("checked", "checked");

    let save = toDosBox.innerHTML;
    localStorage.setItem("save", save);
  });

  let save = toDosBox.innerHTML;
  localStorage.setItem("save", save);
});
