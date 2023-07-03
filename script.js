const monthNameEl = document.getElementById("month-name")
const monthNumberEl = document.getElementById("month-number")
const dayNameEl = document.getElementById("day-name")
const yearEl = document.getElementById("year")

const date = new Date();
const month = date.getMonth();

monthNameEl.innerText = date.toLocaleString("ru", {
    month:"long",
});

monthNumberEl.innerText = date.getDate();

dayNameEl.innerText = date.toLocaleString("ru", {
    weekday:"long"
});

yearEl.innerText = date.getFullYear();


