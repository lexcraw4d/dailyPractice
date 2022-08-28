function alphabetPosition(text) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let lower = text.toLowerCase().match(/[a-z]/g)
    
    let hash = {}
    
    let alphaArr=alpha.split('')
    for (let i=0; i < alpha.length; i++){
      let curr=alpha[i]
      hash[curr] = i+1
    }
    
    let abcArr = (lower.map((letter,i)=>{
    
    let letters = hash[letter]
    return letters[letter] || 0
      })
    )
    let filteredAlpha = abcArr.filter(alpha => alpha !== null || undefined);
    
    return filteredAlpha.join(" ").replace(null, '').toString()
    // return filteredAlpha.join(' ').toString()
    }
    console.log(alphabetPosition("The sunset sets at twelve o' clock."))