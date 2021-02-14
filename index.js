function Ashprinter(options) {
    let words = ["hello", "fine", "me", "I", "you", "we"]
    
    if(options.words_type === 'good')
       options.words_type = 'hi'
    else
        options.words_type = 'hello'

    words.forEach(word => {
        word.style.underline
    })
}

module.exports.Ashprinter = Ashprinter;