document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    const exercisePlanner = document.getElementById("exercise-planner");
    const drinkWaterReminder = document.getElementById("drink-water-reminder");

    startButton.addEventListener("click", () => {
        exercisePlanner.classList.toggle("show");
        drinkWaterReminder.classList.toggle("show");
    });
});