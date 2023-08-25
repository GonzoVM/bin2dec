function bin2Dec(num) {
  let decimal = 0;

  for (let i = num.toString().length - 1; i >= 0; i--) {
    decimal += parseInt(num.toString()[i]) * Math.pow(2, num.toString().length - 1 - i);
  }

  return decimal;
}

function dec2Bin(num) {
  let binary = "";
  // while loop to convert the number, it divides by 2 the number and concatenate the mod on the binary var.
  while (num > 0) {
    if (num % 2 == 1) {
      binary = "1" + binary;
    } else {
      binary = "0" + binary;
    }
    num = Math.floor(num / 2);
  }
  
  return binary;
}

function bin2Hex(num) {
  let hexadecimal;
  // js parseint to translate a base 2 number to base 16 and show it on uppercase.
  hexadecimal = parseInt(num, 2).toString(16).toUpperCase();

  return hexadecimal;
}

function hex2Bin(num) {
  let binary;
  // js parseint to convert a base 16 number to base 2.
  binary = parseInt(num, 16).toString(2);

  return displayOutput(binary, "binary");
}

function bin2Oct(num) {
  let octal;
  // js parseint to translate a base 2 number to base 8.
  octal = parseInt(num, 2).toString(8);

  return octal; // displayOutput(octal, "octal");
}

function oct2Bin(num) {
  let binary;
  // js parseint to convert a base 8 number to base 2.
  binary = parseInt(num, 8).toString(2);

  return binary;
}

function dec2Hex(num) {
  let hexadecimal;
  // js parseint to convert a base 10 number to base 16.
  hexadecimal = parseInt(num, 10).toString(16).toUpperCase();

  return hexadecimal;
}

function hex2Dec(num) {
  let decimal;
  // js parseint to translate a base 16 number to base 10.
  decimal = parseInt(num, 16);

  return decimal;
}

function dec2Oct(num) {
  let octal;
  // js parseint to translate a base 10 number to base 8.
  octal = parseInt(num, 10).toString(8);

  return octal;
}

function oct2Dec(num) {
  let decimal;
  // js parseint to convert a base 8 number to base 10.
  decimal = parseInt(num, 8);

  return decimal;
}
function hex2Oct(num) {
  let octal;
  // js parseint to translate a base 16 number to base 8.
  octal = parseInt(num, 16).toString(8);

  return octal;
}

function oct2Hex(num) {
  let hexadecimal;
  // js parseint to convert a base 16 number to base 10.
  hexadecimal = parseInt(num, 8).toString(16).toUpperCase();

  return hexadecimal;
}




