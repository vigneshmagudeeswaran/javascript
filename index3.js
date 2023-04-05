// JavaScript Inbuild Objects
console.log(Math.abs(-3))//Math object has abs method which used to give absolute Number like if we give -3 it returns 3
console.log(Math.ceil(0.1))// returns 1 if parameter > 1
console.log(Math.random())//returns random numer between 0 and 1.
console.log(Math.random() * (100 - 1) + 1)// returns random number between 1 and 100
console.log(Math.round(1.5))// round  to the nearest whole value 1.5 --> 2, 1.1 --> 1
console.log(Math.max(45,22,55,89,1))//to find maximum number

console.log(Math.min(45,22,55,89,1))

let mark = [45,74,15,35];
let result = Math.min(...mark);// spread operator
console.log('Minimum mark: '+ result)
// string Objects and methods
let vignesh = 'VignEsh';
console.log(vignesh.length)
console.log(vignesh.charAt(2))// find charecter at given position. vignesh --> g
console.log(vignesh.concat(' ','magudeeswaran',' family'))// concat two different strings.
console.log(vignesh.includes('gn'))// to check that string contains the parameter or not.
console.log(vignesh.indexOf('g'))
console.log(vignesh.startsWith('vi'))
console.log(vignesh.endsWith('vi'))
console.log(vignesh.match(/[A-Z]/g))// match  method used to check the regex inside the string.
console.log(vignesh.repeat(5))//VignEshVignEshVignEshVignEshVignEsh
console.log(vignesh.replace('Vig','thug'))//thugnEsh
console.log(vignesh.slice(1))//ignEsh
let para = 'Some Text book';
console.log(para.split(' ',1))// ['some'}
console.log(para.split(' ',2))//['some','text']
console.log(para.substr(5))// 'Text'
console.log(para.toLowerCase())
console.log(para.toUpperCase())
let message1 = '  This is some text you idiot!   '
console.log(message1)// '  This is some text you idiot!   '
console.log(message1.trimStart())//'This is some text you idiot!   '
console.log(message1.trimEnd())//


// javaScript template Literals ` ` --> used in complex strings
const message3 = `Thank you for watching CyberDude 
channel`;
console.log(message3)
const msg1 = ` Hello ${vignesh},

Thank you for watching "CyberDude" Channel`
console.log(msg1)

//Date object methods getDate(),getDay(),getFullYear()
const date = Date();// returns string value Fri Feb 17 2023 02:08:41 GMT+0530 (India Standard Time)
console.log(date)
const now = new Date();// returns object
console.log(now.getFullYear())//2023
const anotherDate = new Date('July 6 1996');// returns object
console.log(anotherDate.getFullYear());//1996

let [month,day,year] = new Date().toLocaleDateString('en-IN').split('/')
console.log(month,day,year)// 17 2 2023

