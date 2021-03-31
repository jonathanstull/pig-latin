## The rules of Pig Latin:

* For words beginning with a vowel, add "way" to the end.
* For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
* If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
* For words beginning with "y", treat "y" as a consonant.

## Tests

Describe: pigLatin()
  Test: "It will add 'way' to the end of words that begin with a vowel."
  Code: pigLatin("a"); 
  Expected Output: "away"

  Test: "




When you get to consonants, don't try to solve it all at once.

Instead, start with an example of a word that only has one consonant. 

Next, try a word with two consonants. 

Finally, work your way up to a word with three consonants. 

After you've written passing tests for this code, tackle the exceptions to the rule like "qu" and "y". 

Then, when your application can successfully translate single words, work on translating entire sentences.