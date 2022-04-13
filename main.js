function myFunction(a, b) {
let capitalA = a.slice(0,1).toUpperCase()
let cleanA = a.replace(a[0], capitalA).replace('%','')
let cleanB = b.split('').reverse().join('').replace('%','')
return  cleanA + cleanB
}