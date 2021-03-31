function findConsonant1(word) {
  let firstLetter = word.charAt(0);
  let consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
  for (i = 0; i < consonant.length; i++) {
    if (firstLetter === consonant[i]) {
      return true;
    }
  };
  return false;
}

function findConsonant2(word) {
  let secondLetter = word.charAt(1);
  let consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
  for (i = 0; i < consonant.length; i++) {
    if (secondLetter === consonant[i]) {
      return true;
    }
  };
  return false;
}

function pigLatin(word) {
  let firstLetter = word.charAt(0);
  let secondLetter = word.charAt(1);
  let pigLatinStr;

  if ((firstLetter==='a')||(firstLetter==='e')||(firstLetter==='i')||(firstLetter==='o')||(firstLetter==='u')) {
    pigLatinStr = word.concat("-way");
    return pigLatinStr;
  } else if ((findConsonant1(word) === true) && (findConsonant2(word) === false)) {
  pigLatinStr = word.slice(1, word.length) + "-" + firstLetter + "ay";

  } else if ((findConsonant1(word) === true) && (findConsonant2(word) === true)) {
    pigLatinStr = word.slice(2, word.length) + "-" + firstLetter + secondLetter + "ay";
  };
  return pigLatinStr;
}

// Mike Krzyzewski --> ike-May ewski-Krzyzay