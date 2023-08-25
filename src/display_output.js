function handleConversion(conversionType) {
  let num = document.getElementById("num").value;
  let outputFormat = document.getElementById(conversionType).value;
  let inputNumber;

  switch (conversionType) {
    case "binToDec":
      inputNumber = "binary";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(binToDec(num), outputFormat);
      break;
    case "binToHex":
      inputNumber = "binary";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(binToHex(num), outputFormat);
      break;
    case "binToOct":
      inputNumber = "binary";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(binToOct(num), outputFormat);
      break;
    case "decToBin":
      inputNumber = "decimal";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(decToBin(num), outputFormat);
      break;
    case "decToHex":
      inputNumber = "decimal";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(decToHex(num), outputFormat);
      break;
    case "decToOct":
      inputNumber = "decimal";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(decToOct(num), outputFormat);
      break;
    case "hexToBin":
      inputNumber = "hexadecimal";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(hexToBin(num), outputFormat);
      break;
    case "hexToDec":
      inputNumber = "hexadecimal";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(hexToDec(num), outputFormat);
      break;
    case "hexToOct":
      inputNumber = "hexadecimal";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(hexToOct(num), outputFormat);
      break;
    case "octToBin":
      inputNumber = "octal";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(octToBin(num), outputFormat);
      break;
    case "octToDec":
      inputNumber = "octal";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(octToDec(num), outputFormat);
      break;
    case "octToHex":
      inputNumber = "octal";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(octToHex(num), outputFormat);
      break;
    default:
      return alert("whta did you do?");
  }
}

function displayOutput(displayNumber, outputFormat) {
  // modifies the html file with the result.
  document.getElementById("conversionOutput").innerHTML =
    "The number in <span id='outputFormat'></span> is: <span id='result'></span>";
  document.getElementById("outputFormat").innerHTML = outputFormat;
  document.getElementById("result").innerHTML = displayNumber;

  return displayNumber;
}

function displayWrongOutput(inputFormat) {
  document.getElementById("conversionOutput").innerHTML =
    "You entered a non <span id='inputFormat'></span> number.";
  document.getElementById("inputFormat").innerHTML = inputFormat;

  return null;
}
