function compareTimeZones() {
  var city1 = document.getElementById("city1").value;
  var city2 = document.getElementById("city2").value;

  if (!city1 || !city2) {
    alert("Please select both cities.");
    resetDropdowns();
    return;
  }

  if (city1 === city2) {
    alert("Please select two different cities.");
    resetDropdowns();
    return;
  }

  var currentTime1 = new Date();
  var currentTime2 = new Date();

  currentTime1 = new Date(currentTime1.toLocaleString("en-US", { timeZone: city1 }));
  currentTime2 = new Date(currentTime2.toLocaleString("en-US", { timeZone: city2 }));

  var timeDifference = currentTime2 - currentTime1;
  var hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

  var city1Formatted = city1.split('/').pop();
  var city2Formatted = city2.split('/').pop();

  var parisTime = currentTime1.toLocaleTimeString("en-US", { timeZoneName: "short" });
  var sydneyTime = currentTime2.toLocaleTimeString("en-US", { timeZoneName: "short" });

  var comparisonResult =
    "<ul style='list-style-type: none; padding-left: 0;'>\n" +
    "  <li>" + city1Formatted + ": " + parisTime + "</li>\n" +
    "  <li>" + city2Formatted + ": " + sydneyTime + "</li>\n" +
    "  <li>" + city1Formatted + " is " + hoursDifference + " hours behind " + city2Formatted + "</li>\n" +
    "</ul>";

  document.getElementById("comparisonResult").innerHTML = comparisonResult;
}



function updateTimer() {
  var now = new Date();
  var hours = now.getHours().toString().padStart(2, '0');
  var minutes = now.getMinutes().toString().padStart(2, '0');
  var seconds = now.getSeconds().toString().padStart(2, '0');
  var timerElement = document.getElementById('timer');
  timerElement.textContent = "Current Time:" + hours + ':' + minutes + ':' + seconds;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial update of the timer
updateTimer();
