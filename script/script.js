const carouselTrack = document.getElementById('carouselTrack');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  let scrollAmount = 0;
  const scrollStep = 270; // Adjust based on card width + margin
  nextBtn.onclick = () => {
    scrollAmount += scrollStep;
    if (scrollAmount > carouselTrack.scrollWidth - carouselTrack.clientWidth) {
      scrollAmount = carouselTrack.scrollWidth - carouselTrack.clientWidth;
    }
    carouselTrack.style.transform = 'translateX(-' + scrollAmount + 'px)';
  }
  prevBtn.onclick = () => {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) scrollAmount = 0;
    carouselTrack.style.transform = 'translateX(-' + scrollAmount + 'px)';
  }




   // Set the deadline date/time (format: YYYY-MM-DDTHH:MM:SS)
  const deadline = new Date("2025-10-31T23:59:59").getTime();

  const daysElem = document.getElementById("days");
  const hoursElem = document.getElementById("hours");
  const minutesElem = document.getElementById("minutes");
  const secondsElem = document.getElementById("seconds");

  function updateTimer() {
    const now = new Date().getTime();
    const distance = deadline - now;

    if (distance < 0) {
      // Time up
      daysElem.innerText = 0;
      hoursElem.innerText = 0;
      minutesElem.innerText = 0;
      secondsElem.innerText = 0;
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElem.innerText = days;
    hoursElem.innerText = hours;
    minutesElem.innerText = minutes;
    secondsElem.innerText = seconds;
  }

  // Update timer every second
  const timerInterval = setInterval(updateTimer, 1000);

  // Initialize timer
  updateTimer();