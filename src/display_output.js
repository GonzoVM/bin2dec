function changeNumber(conversionType) {
  let num = document.getElementById("num").value;
  let outputFormat = document.getElementById(conversionType).value;
  let inputNumber;

  switch (conversionType) {
    case "bin2Dec":
      inputNumber = "binary";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(bin2Dec(num), outputFormat);
      break;
    case "bin2Hex":
      inputNumber = "binary";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(bin2Hex(num), outputFormat);
      break;
    case "bin2Oct":
      inputNumber = "binary";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(bin2Oct(num), outputFormat);
      break;
    case "dec2Bin":
      inputNumber = "decimal";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(dec2Bin(num), outputFormat);
      break;
    case "dec2Hex":
      inputNumber = "decimal";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(dec2Hex(num), outputFormat);
      break;
    case "dec2Oct":
      inputNumber = "decimal";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(dec2Oct(num), outputFormat);
      break;
    case "hex2Bin":
      inputNumber = "hexadecimal";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(hex2Bin(num), outputFormat);
      break;
    case "hex2Dec":
      inputNumber = "hexadecimal";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(hex2Dec(num), outputFormat);
      break;
    case "hex2Oct":
      inputNumber = "hexadecimal";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(hex2Oct(num), outputFormat);
      break;
    case "oct2Bin":
      inputNumber = "octal";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(oct2Bin(num), outputFormat);
      break;
    case "oct2Dec":
      inputNumber = "octal";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(oct2Dec(num), outputFormat);
      break;
    case "oct2Hex":
      inputNumber = "octal";
      if (!isValid(num, inputNumber)) return displayWrongOutput(inputNumber);
      displayOutput(oct2Hex(num), outputFormat);
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
