const yearEl = document.getElementById("year");
const daysEl = document.getElementById("day");
const hoursEl = document.getElementById("hour");
const minutesEl = document.getElementById("minute");
const secondsEl = document.getElementById("second");

const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;
yearEl.textContent = nextYear;

const targetDate = new Date(`January 1 ${nextYear} 00:00:00`);

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  daysEl.textContent = d.toString().padStart(2, "0");
  hoursEl.textContent = h.toString().padStart(2, "0");
  minutesEl.textContent = m.toString().padStart(2, "0");
  secondsEl.textContent = s.toString().padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
