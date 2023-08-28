function handleConversion(srcFormat, targetFormat) {
  let num = document.getElementById("num").value;
  if (!isValid(num, srcFormat)) return displayWrongOutput(srcFormat);

  if (srcFormat === "binary") {
    switch (targetFormat) {
      case "decimal":
        displayOutput(binToDec(num), targetFormat);
        break;
      case "hexadecimal":
        displayOutput(binToHex(num), targetFormat);
        break;
      case "octal":
        displayOutput(binToOct(num), targetFormat);
        break;
      default:
        return alert("what did you do?");
    }
  } else if (srcFormat === "decimal") {
    switch (targetFormat) {
      case "binary":
        displayOutput(decToBin(num), targetFormat);
        break;
      case "hexadecimal":
        displayOutput(decToHex(num), targetFormat);
        break;
      case "octal":
        displayOutput(decToOct(num), targetFormat);
        break;
      default:
        return alert("What did you do?");
    }
  } else if (srcFormat === "hexadecimal") {
    switch (targetFormat) {
      case "binary":
        displayOutput(hexToBin(num), targetFormat);
        break;
      case "decimal":
        displayOutput(hexToDec(num), targetFormat);
        break;
      case "octal":
        displayOutput(hexToOct(num), targetFormat);
        break;
      default:
        return alert("What did you do?");
    }
  } else if (srcFormat === "octal") {
    switch (targetFormat) {
      case "binary":
        displayOutput(octToBin(num), targetFormat);
        break;
      case "decimal":
        displayOutput(octToDec(num), targetFormat);
        break;
      case "hexadecimal":
        displayOutput(octToHex(num), targetFormat);
        break;
      default:
        return alert("whta did you do?");
    }
  }
}

function displayOutput(displayNumber, targetFormat) {
  // modifies the html file with the result.
  document.getElementById("conversionOutput").innerHTML =
    "The number in <span id='targetFormat'></span> is: <span id='result'></span>";
  document.getElementById("targetFormat").innerHTML = targetFormat;
  document.getElementById("result").innerHTML = displayNumber;

  return displayNumber;
}

function displayWrongOutput(inputFormat) {
  document.getElementById("conversionOutput").innerHTML =
    "You entered a non <span id='inputFormat'></span> number.";
  document.getElementById("inputFormat").innerHTML = inputFormat;

  return null;
}
