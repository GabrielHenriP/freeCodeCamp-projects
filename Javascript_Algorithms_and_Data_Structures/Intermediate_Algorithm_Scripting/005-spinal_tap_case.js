/**
 Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 EX: 
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".

spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".

spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".

spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".

spinalCase("AllThe-small Things") should return "all-the-small-things"
 */

// minha solução
 {
  function spinalCase(str) {
    if(/[\s|_]|-/.test(str)){
      const newStr = str.trim().split('').map(letter => {
        if(/[\W|_|-]/.test(letter)){
          
          return '-'
        }
        return letter
      }).join('');
      //console.log(newStr)
      console.log(separateCamelCase(newStr))
      return separateCamelCase(newStr)
    }
     console.log(separateCamelCase(str))
    return separateCamelCase(str)
  }
  
  function separateCamelCase(str){
      const eachWordArray = str.split('-')
      const wordsWithDashes = []
  
      eachWordArray.forEach( eachWord => {
        let words = [];
        let word = [];

        eachWord.split('').forEach((letter, index) => {
          if(index !== 0){
            if(/[A-Z]/.test(letter) ){
              words.push(word.join(''))
              word = [];
              word.push(letter)
            }else if(index === eachWord.length-1){
              word.push(letter)
              words.push(word.join(''))
            }else{
              word.push(letter)
            }
          }else {
            word.push(letter)
          }
          
        })
        
        wordsWithDashes.push(words.join('-').toLowerCase())
      })
    
    return wordsWithDashes.join('-')
  }
  
  spinalCase('thisIsSpinalTap');
}