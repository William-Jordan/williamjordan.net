let startTime;
let timerInterval;

function updateTimer() {
  const elapsedTime = new Date(Date.now() - startTime);
  const hours = String(elapsedTime.getUTCHours()).padStart(2, "0");
  const minutes = String(elapsedTime.getUTCMinutes()).padStart(2, "0");
  const seconds = String(elapsedTime.getUTCSeconds()).padStart(2, "0");
  document.getElementById("timer").innerText = `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
  document.getElementById("startButton").remove(); // Remove the start button once clicked
}

function recordSplit() {
  const bibInput = document.getElementById("bib");
  const bibNumber = bibInput.value;
  if (bibNumber) {
    const skier = startList.find((skier) => skier.bib == bibNumber);
    if (skier) {
      const elapsedTime = (Date.now() - startTime) / 1000; // Elapsed time in seconds
      const relativeTime = elapsedTime - skier.time; // Adjust for skier's start time
      const hours = String(Math.floor(relativeTime / 3600)).padStart(2, "0");
      const minutes = String(Math.floor((relativeTime % 3600) / 60)).padStart(
        2,
        "0"
      );
      const seconds = String(Math.floor(relativeTime % 60)).padStart(2, "0");
      const formattedTime = `${hours}:${minutes}:${seconds}`;

      const tableBody = document.getElementById("raceTableBody");
      const newRow = document.createElement("tr");
      newRow.innerHTML = `<td>${skier.firstName} ${skier.lastName}</td><td>${bibNumber}</td><td>${formattedTime}</td>`;
      tableBody.appendChild(newRow);
      bibInput.value = ""; // Clear the bib entry box
    } else {
      alert("Bib number not found in start list.");
    }
  } else {
    alert("Please enter a bib number.");
  }
}
