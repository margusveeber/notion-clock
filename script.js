function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const day = now.getDate();
    const month = now.toLocaleString('en-US', { month: 'short' });
    
    document.getElementById('date').innerHTML = `<span class="day">${day}.</span> <span class="month">${month}</span>`;
    document.getElementById('clock').innerHTML = `${hours}<span class="colon">:</span>${minutes}`;
}

// Update the clock immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
