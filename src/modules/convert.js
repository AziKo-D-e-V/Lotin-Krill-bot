const translateCT = async (word) => {
  try {
    let answer = "",
      a = {};

    a["Ё"] = "Yo";
    a["Й"] = "Y";
    a["Ц"] = "Ts";
    a["У"] = "U";
    a["К"] = "K";
    a["Е"] = "E";
    a["Н"] = "N";
    a["Г"] = "G";
    a["Ш"] = "Sh";
    a["Щ"] = "Sh";
    a["З"] = "Z";
    a["Х"] = "X";
    a["Ъ"] = "'";
    a["ё"] = "yo";
    a["й"] = "y";
    a["ц"] = "ts";
    a["у"] = "u";
    a["к"] = "k";
    a["е"] = "e";
    a["н"] = "n";
    a["г"] = "g";
    a["ш"] = "sh";
    a["щ"] = "sh";
    a["з"] = "z";
    a["х"] = "x";
    a["ъ"] = "'";
    a["Ф"] = "F";
    a["Ы"] = "I";
    a["В"] = "V";
    a["А"] = "A";
    a["П"] = "P";
    a["Р"] = "R";
    a["О"] = "O";
    a["Л"] = "L";
    a["Д"] = "D";
    a["Ж"] = "J";
    a["Ҳ"] = "H";
    a["Э"] = "E";
    a["ф"] = "f";
    a["ы"] = "i";
    a["в"] = "v";
    a["а"] = "a";
    a["п"] = "p";
    a["р"] = "r";
    a["о"] = "o";
    a["л"] = "l";
    a["ҳ"] = "h";
    a["д"] = "d";
    a["ж"] = "j";
    a["э"] = "e";
    a["Я"] = "Ya";
    a["Ч"] = "Ch";
    a["С"] = "S";
    a["М"] = "M";
    a["И"] = "I";
    a["Т"] = "T";
    a["Б"] = "B";
    a["Ю"] = "Yu";
    a["я"] = "ya";
    a["ч"] = "ch";
    a["с"] = "s";
    a["м"] = "m";
    a["и"] = "i";
    a["т"] = "t";
    a["б"] = "b";
    a["ю"] = "yu";
    a["қ"] = "q";
    a["Қ"] = "Q";
    a["ў"] = "o'";
    a["Ў"] = "O'";
    a["ғ"] = "g'";
    a["Ғ"] = "G'";
    a["Ь"] = "";
    a["ь"] = "";
    a["҂"] = "Yer";
    a["ҁ"] = "yer";

    a["A"] = "А";
    a["B"] = "Б";
    a["D"] = "Д";
    a["E"] = "Э";
    a["F"] = "Ф";
    a["G"] = "Г";
    a["H"] = "Ҳ";
    a["I"] = "И";
    a["J"] = "Ж";
    a["K"] = "К";
    a["L"] = "Л";
    a["M"] = "М";
    a["N"] = "Н'";
    a["O"] = "О";
    a["P"] = "П";
    a["Q"] = "Қ";
    a["R"] = "Р";
    a["S"] = "С";
    a["T"] = "Т";
    a["U"] = "У";
    a["V"] = "В";
    a["X"] = "Х'";
    a["Y"] = "Й";
    a["Z"] = "З";
    a["Ō"] = "Ў";
    a["Ğ"] = "Ғ";
    a["Ş"] = "Ш";
    a["Ć"] = "Ч";
    a["a"] = "а";
    a["b"] = "б";
    a["d"] = "д";
    a["e"] = "е";
    a["f"] = "ф";
    a["g"] = "г";
    a["h"] = "ҳ";
    a["i"] = "и";
    a["'"] = "ъ";
    a["j"] = "ж";
    a["k"] = "к";
    a["l"] = "л";
    a["m"] = "м";
    a["n"] = "н";
    a["o"] = "о";
    a["p"] = "п";
    a["q"] = "қ";
    a["r"] = "р";
    a["s"] = "с";
    a["t"] = "т";
    a["u"] = "у";
    a["v"] = "в";
    a["x"] = "х";
    a["y"] = "й";
    a["z"] = "з";
    a["ō"] = "ў";
    a["ğ"] = "ғ";
    a["ş"] = "ш";
    a["ć"] = "ч";
    a["ҟ"] = "Ё";
    a["ѿ"] = "ё";
    a["Ѻ"] = "ў";
    a["Ѽ"] = "Ў";
    a["Ђ"] = "Я";
    a["Њ"] = "я";

    for (let i = 0; i < word.length; i++) {
      if (word.hasOwnProperty(i)) {
        if (word[i] === "s" && (word[i + 1] === "h" || word[i + 1] === "H")) {
          let changes = word.split("");
          changes[i] = "ş";
          changes[i + 1] = "";
          word = changes.join("");
        }
        if (word[i] === "Y" && (word[i + 1] === "o" || word[i + 1] === "O")) {
          let changes = word.split("");
          changes[i] = "ҟ";
          changes[i + 1] = "";
          word = changes.join("");
        }
        if (i == 0 && word[i] === "Е" && word[i + 1] === "р") {
          let changes = word.split("");
          changes[i] = "҂";
          changes[i + 1] = "";
          word = changes.join("");
        }
        if (i == 0 && word[i] === "е" && word[i + 1] === "р") {
          let changes = word.split("");
          changes[i] = "ҁ";
          changes[i + 1] = "";
          word = changes.join("");
        }
        if (word[i] === "y" && word[i + 1] === "a") {
          let changes = word.split("");
          changes[i] = "Њ";
          changes[i + 1] = "";
          word = changes.join("");
        }
        if (word[i] === "Y" && word[i + 1] === "a") {
          let changes = word.split("");
          changes[i] = "Ђ";
          changes[i + 1] = "";
          word = changes.join("");
        }
        if (word[i] === "y" && (word[i + 1] === "o" || word[i + 1] === "O")) {
          let changes = word.split("");
          changes[i] = "ѿ";
          changes[i + 1] = "";
          word = changes.join("");
        }
        if (word[i] === "S" && (word[i + 1] === "h" || word[i + 1] === "H")) {
          let changes = word.split("");
          changes[i] = "Ş";
          changes[i + 1] = "";
          word = changes.join("");
        }
        if (word[i] === "c" && (word[i + 1] === "h" || word[i + 1] === "H")) {
          let changes = word.split("");
          changes[i] = "ć";
          changes[i + 1] = "";
          word = changes.join("");
        }
        if (word[i] === "C" && (word[i + 1] === "h" || word[i + 1] === "H")) {
          let changes = word.split("");
          changes[i] = "Ć";
          changes[i + 1] = "";
          word = changes.join("");
        }
        if (
          word[i] === "G" &&
          (word[i + 1] === "'" || word[i + 1] === "`" || word[i + 1] === "’")
        ) {
          let changes = word.split("");
          changes[i] = "Ğ";
          changes[i + 1] = "";
          word = changes.join("");
        }
        if (
          word[i] === "g" &&
          (word[i + 1] === "'" || word[i + 1] === "`" || word[i + 1] === "’")
        ) {
          let changes = word.split("");
          changes[i] = "ğ";
          changes[i + 1] = "";
          word = changes.join("");
        }
        if (
          word[i] === "O" &&
          (word[i + 1] === "'" || word[i + 1] === "`" || word[i + 1] === "’")
        ) {
          let changes = word.split("");
          changes[i] = "Ō";
          changes[i + 1] = "";
          word = changes.join("");
        }
        if (
          word[i] === "o" &&
          (word[i + 1] === "'" || word[i + 1] === "`" || word[i + 1] === "’")
        ) {
          let changes = word.split("");
          changes[i] = "ō";
          changes[i + 1] = "";
          word = changes.join("");
        }
        if (
          word[i] === "o" &&
          (word[i + 1] === "‘" || word[i + 1] === "’" || word[i + 1] === "`")
        ) {
          let changes = word.split("");
          changes[i] = "Ѻ";
          changes[i + 1] = "";
          word = changes.join("");
        }
        if (
          word[i] === "O" &&
          (word[i + 1] === "‘" || word[i + 1] === "`" || word[i + 1] === "’")
        ) {
          let changes = word.split("");
          changes[i] = "Ѽ";
          changes[i + 1] = "";
          word = changes.join("");
        }
        if (word[i] === "Y" && word[i + 1] === "e") {
          let changes = word.split("");
          changes[i] = "Е";
          changes[i + 1] = "";
          word = changes.join("");
        }
        if (a[word[i]] === undefined) {
          answer += word[i];
        } else {
          answer += a[word[i]];
        }
      }
    }
    return answer;
  } catch (err) {
    console.log(err);
  }
};

module.exports = translateCT;
