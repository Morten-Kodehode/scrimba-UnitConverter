const convertBtn = document.getElementById("convertBtn");
const inputBox = document.getElementById("inputBox");

convertBtn.addEventListener("click", function () {
  convert();
});

function convert() {
  const value = inputBox.value;
  const lengthOutput = document.getElementById("lengthOutput");
  const volumeOutput = document.getElementById("volumeOutput");
  const massOutput = document.getElementById("massOutput");

  lengthOutput.textContent = `${value} meters = ${value * (0.3048).toFixed(3)} 
    feet ||
    ${value} feet = ${value * (3.281).toFixed(3)} meters`;

  volumeOutput.textContent = `${value} litres = ${value * (0.264).toFixed(3)} 
    gallons ||
    ${value} gallons = ${value * (4.54609).toFixed(3)} litres`;

  massOutput.textContent = `${value} kilos = ${value * (2.204).toFixed(3)}
   pounds ||
   ${value} pounds = ${value * (0.4535924).toFixed(3)} kilos`;
}
