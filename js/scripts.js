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

function findVowel(word) {
  let firstLetter = word.charAt(0);
  let vowel = ["a","e","i","o","u"]
  for (i = 0; i < vowel.length; i++) {
    if (firstLetter === vowel[i]) {
      return true;
    };
  };
  return false;
};

function pigLatin(word) {
  let firstLetter = word.charAt(0);
  let secondLetter = word.charAt(1);
  let pigLatinStr;

  if ((firstLetter==='a')||(firstLetter==='e')||(firstLetter==='i')||(firstLetter==='o')||(firstLetter==='u')) {
    pigLatinStr = word.concat("-way");
    return pigLatinStr;
    // if ((findConsonant1(word) === true) && (findConsonant2(word) === false))
  } else  {
  pigLatinStr = word.slice(numConsonants, word.length) + "-" + firstLetter + "ay";

  } 
  //  else if ((findConsonant1(word) === true) && (findConsonant2(word) === true)) {
  //   pigLatinStr = word.slice(2, word.length) + "-" + firstLetter + secondLetter + "ay";
  // };
  return pigLatinStr;
}

// Mike Krzyzewski --> ike-May ewski-Krzyzay

function findNumConsonants(word) {
  let consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
  let numConsonants = 0;
  let firstLetter = word.charAt(0);
  if (findVowel(firstLetter) === true) {
    return numConsonants;
  } else {
    for (i = 0; i < word.length; i++) {
      console.log("outerloop " + i + " word " + word);
      currentLetter = word.charAt(i);
      // if (findVowel(currentLetter) === true) {
      //   return numConsonants;
      // } 
      // first loop letter s
      for (n = 0; n < consonant.length; n++) {
        console.log("innerloop "+ n +" currentLetter " + currentLetter);
        // first loop letter b
        // Check for a vowel here
        if (currentLetter === consonant[n]) {
          numConsonants++; 
        };
      };
    };
    return numConsonants;
  };
}


// loop through each letter.  Break when letter not consonant.

// Outer loop: iterate through each letter
//store: First loop 's' Second loop 't' Thired loop 'o' break

// Letter s: Inner loop iterate the consonate array

