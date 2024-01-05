
const sessionTimeoutInMinutes = 2;
let timeLeft = sessionTimeoutInMinutes * 60; // Convert minutes to seconds

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  // Display the countdown in the "timer" element
  document.getElementById("timer").innerHTML = `Session Timeout: ${minutes}:${seconds}`;

  
  timeLeft--;

 
  if (timeLeft < 0) {
    clearInterval(timerInterval);
    sessionTimeout();
  }
}


const timerInterval = setInterval(updateTimer, 1000);


function sessionTimeout() {
  
  alert("Your session has timed out. Please log in again.");

}
