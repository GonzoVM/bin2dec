function bin2Dec(num) {
  let decimal = 0;
  let binary = num;

  if (excepHandler(binary, "bin")) {
    // js parseint to translate a base 2 number to base 10.
    decimal = parseInt(binary, 2);

    // modifies the html file with the result.
    document.getElementById("conversionOutput").innerHTML =
      "This number in decimal is: <span id='result'></span>";
    document.getElementById("result").innerHTML = decimal;
    return decimal;
  } else {
    document.getElementById("conversionOutput").innerHTML =
      "You entered a non binary number. Binary numbers only use 0 and 1.";
  }
}

function dec2Bin(num) {
  let binary = "";
  let decimal = num;

  if (excepHandler(decimal, "dec")) {
    // js parseint to translate a base 10 number to base 2.
    binary = parseInt(decimal, 10).toString(2);

    // modifies the html file with the result.
    document.getElementById("conversionOutput").innerHTML =
      "This number in binary is: <span id='result'></span>";
    document.getElementById("result").innerHTML = binary;
    return binary;
  } else {
    document.getElementById("conversionOutput").innerHTML =
      "You entered a non decimal number.";
  }
}

function bin2Hex(num) {
  let hexadecimal;
  let binary = num;

  if (excepHandler(binary, "bin")) {
    // js parseint to translate a base 2 number to base 16 and show it on uppercase.
    hexadecimal = parseInt(num, 2).toString(16).toUpperCase();

    // modifies the html file with the result.
    document.getElementById("conversionOutput").innerHTML =
      "This number in hexadecimal is: <span id='result'></span>";
    document.getElementById("result").innerHTML = hexadecimal;
    return hexadecimal;
  } else {
    document.getElementById("conversionOutput").innerHTML =
      "You entered a non binary number. Binary numbers only use 0 and 1.";
  }
}

function hex2Bin(num) {
  let binary = "";
  let hexadecimal = num;

  if (excepHandler(hexadecimal, "hex")) {
    // js parseint to convert a base 16 number to base 2.
    binary = parseInt(hexadecimal, 16).toString(2);

    // modifies the html file with the result.
    document.getElementById("conversionOutput").innerHTML =
      "This number in binary is: <span id='result'></span>";
    document.getElementById("result").innerHTML = binary;
    return binary;
  } else {
    document.getElementById("conversionOutput").innerHTML =
      "You entered a non hexadecimal number. Hex numbers only use 0 to 9 and A to F.";
  }
}

function bin2Oct(num) {
  let octal;
  let binary = num;

  if (excepHandler(binary, "bin")) {
    // js parseint to translate a base 2 number to base 8.
    octal = parseInt(binary, 2).toString(8);

    // modifies the html file with the result.
    document.getElementById("conversionOutput").innerHTML =
      "This number in octal is: <span id='result'></span>";
    document.getElementById("result").innerHTML = octal;
    return octal;
  } else {
    document.getElementById("conversionOutput").innerHTML =
      "You entered a non binary number. Binary numbers only use 0 and 1.";
  }
}

function oct2Bin(num) {
  let binary = "";
  let octal = num;

  if (excepHandler(octal, "oct")) {
    // js parseint to convert a base 8 number to base 2.
    binary = parseInt(octal, 8).toString(2);

    // modifies the html file with the result.
    document.getElementById("conversionOutput").innerHTML =
      "This number in binary is: <span id='result'></span>";
    document.getElementById("result").innerHTML = binary;
    return binary;
  } else {
    document.getElementById("conversionOutput").innerHTML =
      "You entered a non octal number. Octal numbers only use 0 to 7.";
  }
}

function dec2Hex(num) {
  let hexadecimal = "";
  let decimal = num;

  if (excepHandler(decimal, "dec")) {
    // js parseint to convert a base 10 number to base 16.
    hexadecimal = parseInt(decimal, 10).toString(16).toUpperCase();

    // modifies the html file with the result.
    document.getElementById("conversionOutput").innerHTML =
      "This number in hexadecimal is: <span id='result'></span>";
    document.getElementById("result").innerHTML = hexadecimal;
    return hexadecimal;
  } else {
    document.getElementById("conversionOutput").innerHTML =
      "You entered a non decimal number.";
  }
}

function hex2Dec(num) {
  let decimal = 0;
  let hexadecimal = num;

  if (excepHandler(hexadecimal, "hex")) {
    // js parseint to translate a base 16 number to base 10.
    decimal = parseInt(hexadecimal, 16);

    // modifies the html file with the result.
    document.getElementById("conversionOutput").innerHTML =
      "This number in decimal is: <span id='result'></span>";
    document.getElementById("result").innerHTML = decimal;
    return decimal;
  } else {
    document.getElementById("conversionOutput").innerHTML =
      "You entered a non hexadeimal number. Hex numbers only use 0 to 9 and A to F.";
  }
}

function dec2Oct(num) {
  let octal;
  let decimal = num;

  if (excepHandler(decimal, "dec")) {
    // js parseint to translate a base 10 number to base 8.
    octal = parseInt(decimal, 10).toString(8);

    // modifies the html file with the result.
    document.getElementById("conversionOutput").innerHTML =
      "This number in octal is: <span id='result'></span>";
    document.getElementById("result").innerHTML = octal;
    return octal;
  } else {
    document.getElementById("conversionOutput").innerHTML =
      "You entered a non decimal number.";
  }
}

function oct2Dec(num) {
  let decimal = "";
  let octal = num;

  if (excepHandler(octal, "oct")) {
    // js parseint to convert a base 8 number to base 10.
    decimal = parseInt(octal, 8);

    // modifies the html file with the result.
    document.getElementById("conversionOutput").innerHTML =
      "This number in decimal is: <span id='result'></span>";
    document.getElementById("result").innerHTML = decimal;
    return decimal;
  } else {
    document.getElementById("conversionOutput").innerHTML =
      "You entered a non octal number. Octal numbers only use 0 to 7.";
  }
}
function hex2Oct(num) {
  let octal;
  let hexadecimal = num;

  if (excepHandler(hexadecimal, "hex")) {
    // js parseint to translate a base 16 number to base 8.
    octal = parseInt(hexadecimal, 16).toString(8);

    // modifies the html file with the result.
    document.getElementById("conversionOutput").innerHTML =
      "This number in octal is: <span id='result'></span>";
    document.getElementById("result").innerHTML = octal;
    return octal;
  } else {
    document.getElementById("conversionOutput").innerHTML =
      "You entered a non hexadeimal number. Hex numbers only use 0 to 9 and A to F.";
  }
}

function oct2Hex(num) {
  let hexadecimal = "";
  let octal = num;

  if (excepHandler(octal, "oct")) {
    // js parseint to convert a base 16 number to base 10.
    hexadecimal = parseInt(octal, 8).toString(16).toUpperCase();

    // modifies the html file with the result.
    document.getElementById("conversionOutput").innerHTML =
      "This number in hexadecimal is: <span id='result'></span>";
    document.getElementById("result").innerHTML = hexadecimal;
    return hexadecimal;
  } else {
    document.getElementById("conversionOutput").innerHTML =
      "You entered a non octal number. Octal numbers only use 0 to 7.";
  }
}
