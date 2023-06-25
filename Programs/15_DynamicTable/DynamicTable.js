// Array of names
var names = ["John Doe", "Jane Smith", "Michael Johnson", "Emily Davis", "David Brown"];
var usedNames = []; // Array to track used names

// Function to randomize table entries
function randomizeTable() {
  var table = document.getElementById("myTable");
  var rows = table.getElementsByTagName("tr");

  for (var i = 1; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName("td");
    cells[0].innerHTML = generateUniqueRandomName();
    cells[1].innerHTML = generateRandomAge();
    cells[2].innerHTML = generateRandomCity();
  }
}

// Function to generate a unique random name
function generateUniqueRandomName() {
  if (usedNames.length === names.length) {
    // If all names have been used, reset the usedNames array
    usedNames = [];
  }

  var randomIndex = Math.floor(Math.random() * names.length);
  var randomName = names[randomIndex];

  // Check if the name has already been used
  while (usedNames.includes(randomName)) {
    randomIndex = Math.floor(Math.random() * names.length);
    randomName = names[randomIndex];
  }

  usedNames.push(randomName);
  return randomName;
}

// Function to generate a random age
function generateRandomAge() {
  return Math.floor(Math.random() * 20) + 18;
}

// Function to generate a random city
function generateRandomCity() {
  var cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];
  return cities[Math.floor(Math.random() * cities.length)];
}
