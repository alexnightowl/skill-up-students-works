function time() {
  let time = new Date();

  let hoursBlock = document.querySelector("#hours");
  let minutesBlock = document.querySelector("#minutes");
  let dayBlock = document.querySelector("#day");
  let secondHand = document.querySelector("#secondhand");
  let minuteHand = document.querySelector("#minutehand");
  let hourHand = document.querySelector("#hourhand");

  let hour = time.getHours();
  let minutes = time.getMinutes();
  let today = time.getDay();
  let seconds = time.getSeconds();

  let currentDay;

  if (today == 0) {
    currentDay = "Воскресенье";
  } else if (today == 1) {
    currentDay = "Понедельник";
  } else if (today == 2) {
    currentDay = "Вторник";
  } else if (today == 3) {
    currentDay = "Среда";
  } else if (today == 4) {
    currentDay = "Четверг";
  } else if (today == 5) {
    currentDay = "Пятница";
  } else {
    currentDay = "Суббота";
  }

  let currentHour;

  if (hour < 10) {
    currentHour = "0" + hour;
  } else {
    currentHour = hour;
  }

  let currentMinute;

  if (minutes < 10) {
    currentMinute = "0" + minutes;
  } else {
    currentMinute = minutes;
  }

  let secondHandDefaultPosition = -90;
  let secondHandDivisionPrice = 6;
  let secondHandCurrentPosition =
    secondHandDefaultPosition + seconds * secondHandDivisionPrice;

  if (secondHandCurrentPosition == 270) {
    secondHandCurrentPosition = secondHandDefaultPosition;
  }

  let minuteHandDefaultPosition = -90;
  let minuteHandDivisionPrice = 6;
  let minuteHandCurrentPosition =
    minuteHandDefaultPosition + minutes * minuteHandDivisionPrice;

  if (minuteHandCurrentPosition == 270) {
    minuteHandCurrentPosition = minuteHandDefaultPosition;
  }

  let hourHandDefaultPosition = -90;
  let hourHandDivisionPrice = 30;
  let hourHandCurrentPosition =
    hourHandDefaultPosition + hour * hourHandDivisionPrice;

  if (hourHandCurrentPosition == 270) {
    hourHandCurrentPosition = hourHandDefaultPosition;
  }

  hoursBlock.innerHTML = currentHour;
  minutesBlock.innerHTML = currentMinute;
  dayBlock.innerHTML = currentDay;
  secondHand.style.transform = `rotate(${secondHandCurrentPosition}deg)`;
  minuteHand.style.transform = `rotate(${minuteHandCurrentPosition}deg)`;
  hourHand.style.transform = `rotate(${hourHandCurrentPosition}deg)`;
}

time();
setInterval(time, 500);
