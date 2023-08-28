function binToDec(num) {
  let decimal = 0;

  for (let i = num.toString().length - 1; i >= 0; i--) {
    decimal += parseInt(num.toString()[i]) * Math.pow(2, num.toString().length - 1 - i);
  }

  return decimal;
}

function binToHex(num) {
  let hexadecimal = "";
  let actualHex = "";

  while (num.toString().length % 4 != 0) {
    num = "0" + num;
  }

  for (let i = num.toString().length - 1; i >= 0; i--) {
    if (actualHex.length == 3) {
      actualHex = num.toString()[i] + actualHex;
      hexadecimal = hexTranslator(binToDec(actualHex), "decimal") + hexadecimal;
      actualHex = "";
    } else {
      actualHex = num.toString()[i] + actualHex;
    }
  }

  return hexadecimal;
}

function binToOct(num) {
  let octal = "";
  let actualOct = "";

  while (num.toString().length % 3 != 0) {
    num = "0" + num;
  }

  for (let i = num.toString().length - 1; i >= 0; i--) {
    if (actualOct.length == 2) {
      actualOct = num.toString()[i] + actualOct;
      octal = binToDec(actualOct) + octal;
      actualOct = "";
    } else {
      actualOct = num.toString()[i] + actualOct;
    }
  }

  // js parseint to translate a base 2 number to base 8.
  // octal = parseInt(num, 2).toString(8);

  return octal;
}

function decToBin(num) {
  let binary = "";
  // while loop to convert the number, it divides by 2 the number and concatenate the mod on the binary var.
  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }

  return binary;
}

function decToHex(num) {
  let hexadecimal = "";

  while (num > 0) {
    hexadecimal = hexTranslator((num % 16), "decimal") + hexadecimal;
    num = Math.floor(num / 16);
  }

  // js parseint to convert a base 10 number to base 16.
  // hexadecimal = parseInt(num, 10).toString(16).toUpperCase();

  return hexadecimal;
}

function decToOct(num) {
  let octal = "";
  while (num > 0) {
    octal = (num % 8) + octal;
    num = Math.floor(num / 8);
  }

  return octal;
}

function hexToBin(num) {
  let binary = "";

  for (i in num) {
    let actualBin = decToBin(hexTranslator(num[i], "hexadecimal"));

    for (let j = actualBin.toString().length; j < 4; j++) {
      binary += "0"
    }

    binary += actualBin;
  }

  return parseInt(binary);
}

function hexToDec(num) {
  let decimal = 0;
  /**
   * teniendo un número hexadecimal         124A
   * coger números 1 a 1                    (1)24A
   * multiplicar ese num por 16^posición     |_> 1*16^3 
   * sumar todos los valores                1*16^3 + 2*16^2 + 4*16^1 + A*16^0
   * traducir letras a números correspondientes: A = 10, B = 11, ... F = 15
   */
  // for (let i = 0; i < num.toString().length; i++) {
  for (i in num) {
    decimal += (hexTranslator(num[i], "hexadecimal") * Math.pow(16, (num - 1 - i)));
  }

  return decimal;
}

function hexToOct(num) {
  let octal;
  // js parseint to translate a base 16 number to base 8.
  //octal = parseInt(num, 16).toString(8);

  octal = binToOct(hexToBin(num));

  return octal;
}

function octToBin(num) {
  let binary= "";

  for (i in num.toString()) {
    let actualBin = decToBin(num.toString()[i]);
    for (let j = actualBin.toString().length; j < 3; j++) {
      binary += "0"
    }
    binary += actualBin;
  }

  // js parseint to convert a base 8 number to base 2.
  // binary = parseInt(num, 8).toString(2);

  return parseInt(binary);
}

function octToDec(num) {
  let decimal = 0;
  for (let i = 0; i < num.toString().length; i++) {
    decimal += (parseInt(num.toString()[i]) * Math.pow(8, (num.toString().length - 1 - i)))
  }
  return decimal;
}

function octToHex(num) {
  let hexadecimal;
  // js parseint to convert a base 16 number to base 10.
  // hexadecimal = parseInt(num, 8).toString(16).toUpperCase();

  hexadecimal = binToHex(octToBin(num));

  return hexadecimal;
}

function hexTranslator(num, srcFormat) {
  let actualNumber;

  if (srcFormat == "hexadecimal") {
    if (num >= 0 && num <= 9) {
      actualNumber = parseInt(num);
    } else {
      actualNumber = num.toUpperCase().charCodeAt(0) - 55;
    }
  } else {
    if (num >= 0 && num <= 9) {
      actualNumber = parseInt(num);
    } else {
      actualNumber = String.fromCharCode(parseInt(num) + 55);
    }
  }
  return actualNumber;
}