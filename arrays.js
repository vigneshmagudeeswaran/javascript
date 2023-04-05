// Adding element to JavaScript Array 
const cart = ['Fruits',1, true,undefined,null]
cart[5]='Orange'
console.log(cart)
cart.push('Straberries','pomagranete')// add element in end of array
console.log(cart)
cart.unshift('Goa')// add elements in front of the array
console.log(cart)
cart.splice(3,0,'watermelons','Bananas')//1param= from where to add 2param= delete the given number of elements from where it starts
console.log(cart)
cart.splice(3,1,'watermelons2','Bananas')//1param= from where to add 2param= delete count
console.log(cart)
console.log(cart.indexOf('Fruits'))
console.log(cart.lastIndexOf('Bananas'))//retuns index of last instance of Bananas
console.log(cart.includes('plam'))// to check the values inside the array or not


// Finding elements in Javascript reference array
const orders =[
    {id : 1, item: 'smartphones',quantity:1},
    {id:2, item:'Maggi',quantity:3},
]
//callback function apply on each items inside the array
let result1 = orders.find(function(order){
    return order.item === 'Maggi'
})// find method is used to find the object or array that contain the particular item
console.log(result1);

let result2 = orders.findIndex(function(order){
    return order.item === 'Maggi'
})// findIndex method is used to find inex of the object or array that contain the particular item
console.log(result2);

// arrow function
let result3 = orders.findIndex((order)=>{
    return order.item === 'Maggi'
})// findIndex method is used to find inex of the object or array that contain the particular item
console.log(result3);

//Removing element in the array
const number =[1,2,3,4];

number.pop()
console.log(number)
number.shift()
console.log(number)
number.splice(2,2)
console.log(number)

// Emptying Javascript array
let numbers1 =[1,2,3,4];

numbers1 = [];
console.log(numbers1)

numbers1.length = 0;

numbers1.splice(0, number.length);
console.log(numbers1)

//combining & extracting elements in javaScript Arrays

const shopping_cart = ["Maggi","Beans","Masala"]
const additional_cart =["Matchbox","Salt"]
let recipe =shopping_cart.concat(additional_cart);
console.log(recipe)
//Extract
extractedInfo = recipe.slice(1,3);
console.log(recipe);
console.log(extractedInfo)

// Spread operator
let recipe1 = [...additional_cart,...shopping_cart]
console.log(recipe1)
//iterating elements in Array
const dailyRoutine = ["Wake up","Eat","Sleep"];
//for-of
for(let routine of dailyRoutine){
    console.log(routine)
}
//for in
for(let routine in dailyRoutine){
    console.log(dailyRoutine[routine]);
}
//for-each

dailyRoutine.forEach(function(routine,RoutineIndex){
    console.log(RoutineIndex,routine);
})

dailyRoutine.forEach((routine,RoutineIndex) => {
    console.log(RoutineIndex,routine);
})

//Joining and splitting Javascript arrays
let dailyRoutines = dailyRoutine.join('--');
console.log(dailyRoutines)

let fullName = "vignesh Magudeeswaran"
let name = fullName.split(" ")
console.log(name)
let firstName = name[0];
let lastName = name[1];
console.log(`My First name is ${firstName} and last name is ${lastName}`)

let postTitle = "This is my Post!";
let postSlug = postTitle.split(" ");
let finalSlug = postSlug.join('-');
console.log(postSlug);
console.log(finalSlug);