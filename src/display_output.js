function displayOutput(displayNumber, formatNumber) {
  // modifies the html file with the result.
  document.getElementById("conversionOutput").innerHTML =
    "The number in <span id='formatNumber'></span> is: <span id='result'></span>";
  document.getElementById("formatNumber").innerHTML = formatNumber;
  document.getElementById("result").innerHTML = displayNumber;
}

function displayWrongOutput(formatNumber) {
  document.getElementById("conversionOutput").innerHTML =
    "You entered a non <span id='formatNumber'></span> number.";
    document.getElementById("formatNumber").innerHTML = formatNumber;
}
