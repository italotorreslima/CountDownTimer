const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYears = prompt(
  "Enter the date for the countdown(Ex.: 11 April 2022): "
);

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const verificationNY = newYearsDate.getTime();
  const verificationCD = currentDate.getTime();
  if (verificationCD > verificationNY) {
    alert("Date entered has passed. Please enter a valid date: ");
    document.location.reload(true);
  } else if (Number.isNaN(verificationNY) == true) {
    alert("You entered not a number. Please enter a valid date: ");
    document.location.reload(true);
  }
  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const countingDays = totalSeconds / (3600 * 24);

  const days = Math.floor(countingDays);
  const countingHours = (countingDays - days) * 24;

  const hours = Math.floor(countingHours);
  const countingMinutes = (countingHours - hours) * 60;

  const minutes = Math.floor(countingMinutes);
  const countingSeconds = (countingMinutes - minutes) * 60;

  const seconds = Math.floor(countingSeconds);

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
