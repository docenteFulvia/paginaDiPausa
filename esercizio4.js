document.addEventListener('DOMContentLoaded', function () {
  const startTimeElement = document.getElementById('start-time');
  const endTimeElement = document.getElementById('end-time');
  const countdownElement = document.getElementById('countdown');
  const startButton = document.getElementById('start-button');

  let countdownInterval;

  function formatTime(date) {
    return date.toLocaleTimeString('it-IT', {hour: '2-digit', minute: '2-digit'});
  }

  function startCountdown() {
    console.log('Start count down ingresso');
    const startTime = new Date();

    startTimeElement.textContent = `Inizio pausa: ${formatTime(startTime)}`;

    const endTime = new Date(startTime.getTime() + 15 * 60 * 1000);
    endTimeElement.textContent = `Fine pausa: ${formatTime(endTime)}`;

    let timeRemaining = 15 * 60;

    countdownInterval = setInterval(function () {
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining % 60;
      countdownElement.textContent = `Tempo rimanente: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = 'Tempo rimanente: 00:00';
      }

      timeRemaining--;
    }, 1000);
  }

  startButton.addEventListener('click', function () {
    if (countdownInterval) {
      clearInterval(countdownInterval);
    }
    startCountdown();
  });
});
