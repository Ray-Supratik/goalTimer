// Set the target date (year, month index starting from 0, day)
const targetDate = new Date(2029, 5, 1); // December 31, 2024

function updateCountdown() {
  const currentDate = new Date();
  const difference = targetDate.getTime() - currentDate.getTime();

  // Calculate days, hours, minutes, and seconds left
  const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);

  // Output the result
  document.getElementById("countdown").innerHTML =
    daysLeft +
    " days " +
    hoursLeft +
    " hours " +
    minutesLeft +
    " minutes " +
    secondsLeft +
    " seconds left";
}

// Call updateCountdown every second
setInterval(updateCountdown, 1000);
