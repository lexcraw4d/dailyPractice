
function algoStr (str) {
    // Convert 'str' into an array and use .map to execute a block of code on each word
     str.split(' ')
    .map(word => {
        console.log('entering map', word)
        // For each word, we convert the first character to upper case
        console.log(word.substring(0, 1).toUpperCase())
        + word.substring(1);
        console.log('string of everything after the 1 index', word.substring(1))
        
      })
      //glue everything back together 
      .join(' ');
      //expected: Hello Substring Bye

  };
  
algoStr('hello substring bye');

