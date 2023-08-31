// Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const currentDayIndex = new Date().getDay() - 1; // Adjust for zero-based index

// Add the "current-day" class to the corresponding day's row
const dayRows = document.querySelectorAll('.day-row');
if (currentDayIndex >= 0 && currentDayIndex < dayRows.length) {
    dayRows[currentDayIndex].classList.add('current-day');
}
