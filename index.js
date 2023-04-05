let person = {
    name: "vignesh",
    age:22,
    gender:'female',
    address: "Chennai, Tamilnadu, India"};

console.log(person.name);

function greetUser(name,age){
    // set of statement
    //let name = 'vignesh';
    let msg ='hello' + name + "I'm learning "+ age;
    console.log(msg)
}

greetUser('viki',25);

// Arithmatic operator 

// Assignment operator
let x=0;
let y=1;
x = x+5;
y += 5;
console.log(x,y)

//comparison operator
console.log(1>5);
console.log(1!=1);
console.log(1 <= 5);
console.log(1>=5);
//Equality operator
console.log(1===1);//True strictcheck
console.log('1'===1)//false
console.log(1==1);//true/loose check
console.log('1'==1);// True /loose check
console.log(1!==1);
// string comparison
console.log('alen'<'viki')
//comparison of different type
console.log('1' <5);
console.log(true == 1); 

//Ternary operators
// If person's age is more than 18,
// They are 'Adult category, otherwise,
// Thay are a 'child' category
let age =24;
let type = age > 18 ? "Adult Ticket": "child Ticket";// condition ? 'value1':'value2'
console.log(type);

// logical operator
//logical AND (&&)
//returns TRUE if both operads are TRUE
console.log(false && true);
// logical OR (||)
// returns TRUE if anyone operands are TRUE
console.log(false|| true );
//Bank loan eligibility
//High Income, CIBILScore -> Loan Eligible, Ineligible
let highIncome = true;
let cibilScore = false;
let eligiblePerson = highIncome && cibilScore
console.log("status: " + eligiblePerson);
//High Income, CIBILScore -> either Loan Eligible or Ineligible
eligiblePerson = highIncome || cibilScore;
console.log("status: " + eligiblePerson);
//falsy(false)--> undefined,null,0,false,'',"",NaN(not a number)
//truthy(true)--> Anything that is not falsy is --> Truthy
// shortcircuting--> if first value is true it does not check other condition
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);
userColor = '';
currentColor = userColor || defaultColor;
console.log(currentColor);

//not
let applicationStatus = ! eligiblePerson;
console.log("status: " + applicationStatus);

//BitWise Operator --> |
console.log(1|2); //BitWise or--> Ans: 3
// 1-> 00000001 -> 1
// 2-> 00000010 -> 2
// r-> 00000011 -> 3 

//Bitwsise AND &
console.log(1&2); 
// 1-> 00000001 -> 1
// 2-> 00000010 -> 2
// r-> 00000000 -> 0 

const readPermission = 4; //00000100
const writePermission = 2;//00000010
const  executePermission = 1;//00000001
let myPermission = 0;
myPermission = myPermission | writePermission;// 00000000 | 00000010
console.log(myPermission);
let message = (myPermission & readPermission) ? 'Yes' : 'No';//00000010 & 00000100
console.log(message);
// w-> 00000100 -> 1 --> write
// r-> 00000010 -> 2 --> Read
// e-> 00000001 -> 0 --> Execute

// conditional Statements
let weather = ' cold';
if(weather === 'hot'){
    console.log('weather is hot');
}     
else{
    console.log('weather is cold');
}

// Greeting application
// If hour is between 12AM to 1PM -> Good Morning
//Else if hour is between 1 PM to 5 PM -> Good Afternoon
//Else if hour is between 5 PM to 12AM -> Good Afternoon
let hrs = new Date();// Date Sun Feb 12 2023 15:51:19 GMT+0530 (India Standard Time)--> object
let hour = hrs.getHours();//using getHours method in date object we can get hour

if (hour >= 0 && hour <= 13){
    console.log("good Morning")
}
else if(hour >13 && hour <= 17){
    console.log("Good Afternoon")
}
else{
    console.log("Good Evening")
}

//Switch case
/*switch(condition){
    case 1:
        console.log('1');
    case 2:
        console.log('2');
    default:
        console.log('Default Behaviour');
}
*/
// Grade Feed back system
let grade = 'A';

switch(grade) {
    case 'S':
        console.log('Super Grade');
        break;
    case 'A':
        console.log('Excellent Grade');
        break;
    case 'E':
        console.log('Just Pass');
        break;
    default:
        console.log('unknown grade');
            }

let marks = 60;

switch(true){
    case (marks > 90): //  top order need to be first
        console.log('Super Grade');
        break;
    case (marks > 50):
        console.log('Pass');
        break;
    case (marks <50):
        console.log('Failed!');
        break;
    default:
        console.log('unknown grade');
}

// loops
//1) for loop
//2) While loop
//3) Do While loop
//4) For-in loop
//5) for of loop


// for loop // remmber ICS
/* for (initialExpression(inline variable); condition; step){
    console.log('Number #1')
} */

for (let i=0; i<5; i++){
    if (i % 2 !==0){
        console.log('odd Number #' + i);

    }
    else{
        console.log('even Number #' + i);
    }
}

//while loop--> strictly follows the conditon.
let j = 15;
while (j>=5){
    if (j %2 !==0){
        console.log('while loop #' + j);
    }
    j--;
}

/*Do-While Loop --> first execute the do block then checks the condition if it true then again execute do block 

do{
    code
}while(condition);

*/
do{
    console.log('Do while Number #' + j);
    j--
}while(j >= 1);

// for-in
//object
const person1 ={
    name: 'viki',
    age: 24,
    sex : 'Male'
};

for(let key in person1){
    console.log('key :', person1[key]);
}

let colors = ['red','blue','green'];

for(let keys in colors){
    console.log(colors[keys])
}

//for-of--> manily for arrays to get values directly instead of using colors[keys] we can give colors whwn we ue for of loop
 for (let color of colors){
    console.log('color: ' + color);
 }

