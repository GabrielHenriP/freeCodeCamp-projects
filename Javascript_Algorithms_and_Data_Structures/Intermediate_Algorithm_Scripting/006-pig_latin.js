/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
EX:
translatePigLatin("california") should return "aliforniacay".

translatePigLatin("paragraphs") should return "aragraphspay".

translatePigLatin("glove") should return "oveglay".

translatePigLatin("algorithm") should return "algorithmway".

translatePigLatin("eight") should return "eightway".

Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".

Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".
*/

// minha solução
{
  function translatePigLatin(str) {
   
    const beginsWithVowel = /(^[aeiou][a-z]+)/;
    const searchVowel = /(^[^aeiou]+)([a-z]*)/g;
    const withoutVowel = /^[^aeiou]+$/;
  
    
    if(withoutVowel.test(str)){
      //console.log(str.match(searchVowel))
      console.log(str.replace(searchVowel,"$1ay"))
      return str.replace(searchVowel,"$1ay")
    }else if(beginsWithVowel.test(str)){
      //console.log(str.match(beginsWithVowel))
      console.log(str.replace(beginsWithVowel,"$1way"))
      return str.replace(beginsWithVowel,"$1way")
    }else{
      //console.log(str.match(searchVowel))
      console.log(str.replace(searchVowel,"$2$1ay"))
      return str.replace(searchVowel,"$2$1ay")
    }

  }
  
  translatePigLatin("aght");
}

// solução do freecodecamp
{
  function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    console.log(myConsonants)
    console.log(str.replace(consonantRegex, ""))
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  }
  
  translatePigLatin("consonant");
}