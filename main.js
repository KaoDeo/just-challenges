// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'

// myFunction('java', 'tpi%rcs')  Expected 'Javascript'
// myFunction('c%ountry', 'edis') Expected 'Countryside'
// myFunction('down', 'nw%ot')    Expected 'Downtown'

function myFunction(a, b) {
let capitalA = a.slice(0,1).toUpperCase()
let cleanA = a.replace(a[0], capitalA).replace('%','')
let cleanB = b.split('').reverse().join('').replace('%','')
return  cleanA + cleanB
}
