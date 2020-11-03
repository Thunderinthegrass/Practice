set = null;
let timerID = null;
let timerRunning = false;
function stopclock() {
  if (timerRunning)
    clearTimeout(timerID)
  timerRunning = false;
}
function startclock() {
  stopclock();
  showtime();
}
function showtime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let timeValue = "" + ((hours > 12) ? hours - 12 : hours);
  timeValue += ((minutes < 10) ? ":0" : ":") + minutes;
  timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
  timeValue += (hours >= 12) ? " PM" : " AM";
  document.alert.time.value = timeValue;
  if (timeValue == set) {
    alert(message);
  }
  timerID = setTimeout("showtime()", 1000);
  timerRunning = true;
}
function setalert() {
  set = prompt("Установка времени напоминания.\nВведите время в формате 0:00:00. Например 11:01:00 AM", "");
  document.alert.set.value = set;
  if (document.alert.message.value == "None") {
    setmess();
  }
  if (document.alert.message.value == "null") {
    setmess();
  }
}
function setmess() {
  message = prompt("Установка сообщения для напоминания.\nВведите свое сообщение.", "");
  document.alert.message.value = message;
}
function quit() {
  if (confirm("Сбросить все установки?")) {
    close();
  }
}


// timer
let timerInput = document.getElementById("time");
let buttonRun = document.getElementById("button")
let timerShow = document.getElementById("timer");

buttonRun.addEventListener('click', function () {
  timeMinut = parseInt(timerInput.value) * 60;
})

timer = setInterval(function () {
  seconds = timeMinut % 60
  minutes = timeMinut / 60 % 60
  hour = timeMinut / 60 / 60 % 60
  if (timeMinut < 0) {
    clearInterval(timer);
    alert("Время закончилось");
  } else {
    let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
    timerShow.innerHTML = strTimer;
  }
  --timeMinut;
}, 1000)

// progress
function userProgress(time) {
  let start = 0;
  let outProgress = document.querySelector('.out-progress');
  let progressElement = document.querySelector('.user-progress');
  let progressBtn = document.querySelector('.progress-btn');
  let progressInp = document.querySelector('.progress-inp');
  let r = Math.floor(Math.random() * Math.floor(101));
  console.log(r);

  progressBtn.onclick = function () {


    let valInp = progressInp.value;
    let progressInpNum = Number(valInp);
    console.log(progressInpNum);

    let intervalId = setInterval(function () {
      if (start > 30 && r != progressInpNum) {
        clearInterval(intervalId);
        outProgress.innerHTML = 'Не угадал';
      }
      if (r == progressInpNum) {
        outProgress.innerHTML = 'Угадал';
        clearInterval(intervalId);
      }
      else {
        progressElement.value = start;

      }

      start++;
    }, time);

    if (r != progressInpNum) {
      if (r > progressInpNum) {
        outProgress.innerHTML = 'Больше';
      }
      else if (r < progressInpNum) {
        outProgress.innerHTML = 'Меньше';
      }
    }
  }
}
userProgress(1000);
