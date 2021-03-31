function pigLatin(word) {
  const firstLetter = word.charAt(0);
  if ((firstLetter==='a')||(firstLetter==='e')||(firstLetter==='i')||(firstLetter==='o')||(firstLetter==='u')) {
  const pigLatin = word.concat("way");
  return pigLatin;
  }
}