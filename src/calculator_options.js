function binToDec(num) {
  let decimal = 0;

  for (let i = num.toString().length - 1; i >= 0; i--) {
    decimal += parseInt(num.toString()[i]) * Math.pow(2, num.toString().length - 1 - i);
  }

  return decimal;
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
  
  for (i in num){
    let actualBin = decToBin(hexTranslator(num[i]));

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
    decimal += (hexTranslator(num[i]) * Math.pow(16, (num - 1 - i)));
  }

  return decimal;
}

function octToDec(num) {
  let decimal = 0;
  for (let i = 0; i < num.toString().length; i++) {
    decimal += (parseInt(num.toString()[i]) * Math.pow(8, (num.toString().length - 1 - i)))
  }
  return decimal;
}

function binToHex(num) {
  let hexadecimal;
  // js parseint to translate a base 2 number to base 16 and show it on uppercase.
  hexadecimal = parseInt(num, 2).toString(16).toUpperCase();

  return hexadecimal;
}

function binToOct(num) {
  let octal;
  // js parseint to translate a base 2 number to base 8.
  octal = parseInt(num, 2).toString(8);

  return octal;
}

function octToBin(num) {
  let binary;
  // js parseint to convert a base 8 number to base 2.
  binary = parseInt(num, 8).toString(2);

  return binary;
}

function decToHex(num) {
  let hexadecimal;
  // js parseint to convert a base 10 number to base 16.
  hexadecimal = parseInt(num, 10).toString(16).toUpperCase();

  return hexadecimal;
}

function hexToOct(num) {
  let octal;
  // js parseint to translate a base 16 number to base 8.
  octal = parseInt(num, 16).toString(8);

  return octal;
}

function octToHex(num) {
  let hexadecimal;
  // js parseint to convert a base 16 number to base 10.
  hexadecimal = parseInt(num, 8).toString(16).toUpperCase();

  return hexadecimal;
}

// console.log(hexToDec("12A4"));
// console.log(decToHex(4772));

function hexTranslator(num,srcFormat) {
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

console.log(hexTranslator("F", "hexadecimal"));