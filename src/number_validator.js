function isValid(num, opt) {
  // bin numbers
  if (opt == "binary") {
    for (let i = 0; i < num.toString().length; i++) {
      if (num.toString()[i] == 0 || num.toString()[i] == 1) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }

  //dec numbers
  if (opt == "decimal") {
    for (let i = 0; i < num.toString().length; i++) {
      let j = num.toString()[i];
      if (j >= 0 && j <= 9) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }

  // hex numbers
  if (opt == "hexadecimal") {
    for (let i = 0; i < num.toString().length; i++) {
      let j = num.toString()[i];
      if (j >= 0 && j <= 9) {
        continue;
      } else if (j.toUpperCase() >= "A" && j.toUpperCase() <= "F") {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }

  // oct numbers
  if (opt == "octal") {
    for (let i = 0; i < num.toString().length; i++) {
      let j = num.toString()[i];
      if (j >= 0 && j <= 7) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }
}
