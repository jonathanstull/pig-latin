function findConsonant(word) {
  let firstLetter = word.charAt(0);
  let consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
  for (i = 0; i < consonant.length; i++) {
    if (firstLetter === consonant[i]) {
      return true;
    }
  };
  return false;
}

function pigLatin(word) {

  let firstLetter = word.charAt(0);
  let pigLatinStr;

  if ((firstLetter==='a')||(firstLetter==='e')||(firstLetter==='i')||(firstLetter==='o')||(firstLetter==='u')) {
  pigLatinStr = word.concat("way");

  return pigLatinStr;

  } else if (findConsonant(word) === true) {
    pigLatinStr = word.slice(1, word.length) + firstLetter;
    
    console.log(pigLatinStr);
  };
  return pigLatinStr;
}