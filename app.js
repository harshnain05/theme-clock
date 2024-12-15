const [hourEl, minuteEl, secondEl, timeEl, dateEl, toggle] = [
    '.hour', '.minute', '.second', '.time', '.date', '.toggle'
].map(selector => document.querySelector(selector));
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
toggle.addEventListener('click', ({ target }) => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    target.innerHTML = html.classList.contains('dark') ? 'Light mode' : 'Dark mode';});
const setTime = () => {
    const now = new Date();
    const [month, day, date, hours, minutes, seconds] = [
        now.getMonth(),
        now.getDay(),
        now.getDate(),
        now.getHours(),
        now.getMinutes(),
        now.getSeconds() ];
    const hoursForClock = hours % 12 || 12;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;
    timeEl.innerHTML = `${hoursForClock}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;};
const scale = (num, inMin, inMax, outMin, outMax) =>
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
setTime();
setInterval(setTime, 1000);
