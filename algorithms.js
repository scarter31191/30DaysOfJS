function stringInclude (word, letter) { //set two variables the word we are iterating over and the letter we are searching for
    let matches; // set a variable to return true or false
    for(let i = 0; i < word.length; i++){ // index is set to 0 if i is less than the word length go to the next index until the end 
      if(word[i] === letter){ // if the index obj matches the letter obj return true
        matches = true
      }
    }
    return !!matches // is the a match true or false (!! is a short hand boolean)
  }
  /*If there is no matching element, the matches variable will equal undefined, to coerce that into a boolean value we use the !! operator.
    The !!(double bang) operator coerces an expression into its boolean value. think of !! as follows. If you want to change false into true, you would write 
    !undefined //true

    But our real goal is to return true when the expression is truthy and false when the expression is flasy. Currently, an expression like !undefined returns true 
    when the expression is flasy. So let's add another ! operator to have it match: !!undefined // flase 

    thus we coerce an expression to it's boolean value
  */
  console.log(stringInclude('banana', 'a')) //true
  console.log(stringInclude('banana', 'd')) //false

