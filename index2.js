//oops
let person2 = { 
        name : "Anbu",
        age :24,
        interest : ['creating, teaching new things.'],
        address : {
            city:'Chennai',
            state:'Tamil Nadu',
        },
        greeting: function(){
            let msg = `My Name is ${this.name}, i love ${this.interest}`;// this-> keyword is used to call a value from same object. $ {}is place holder to place the value of variable inside the string' 
            console.log(msg);
        }
    };
console.log(person2.address.city);
console.log(person2.name);
console.log(person2.interest[0]);
person2.greeting()

// javaScript factory Functions -->

function createPerson(name){//camelcase
    return { 
    name, // if key values are same no need to give like name : name instead of that simply give name
    age :24,
    interest : ['creating, teaching new things.'],
    address : {
        city:'Chennai',
        state:'Tamil Nadu',
    },
    greeting(){ // even function also can be cfreate by not mentioning key value pair
        let msg = `My Name is ${this.name}`;// this-> keyword is used to call a value from same object. $ {}is place holder to place the value of variable inside the string' 
        console.log(msg);
        }
    };
}

let viki = createPerson("viki");
let trisha = createPerson('trisha');
trisha.greeting();
viki.greeting();

// constructor functions

function Person(name){//Pascal naming convection ->MyFirstName
    this.name = name;
    this.greeting = function() { // even function also can be cfreate by not mentioning key value pair
        let msg = `My Name is ${this.name}`;// this-> keyword is used to call a value from same object. $ {}is place holder to place the value of variable inside the string' 
        console.log(msg);
        }
}

let person3 = new Person("viki1");
person3.greeting();

// dynamic objects -> able to create, add, delete values of objects
const person4 ={
    name : 'David'
}

person4.age =24;
person4.greeting = function(){}
console.log(person4)
delete person4.greeting
console.log(person4)

/* Constructor Property -->

let x ={}; when we are creating object actually behind the scenes javascript will do like below
let x = new Object(){}
let name = 'anbu'; // -> new String('Anbu');
let age =3; // Number Literals -> new Number(3);
let isAlive = true; // BooleanLiterals -> new Boolean(true);

*/

/* functions are objects
for example Person class have many inbuild function like length
Person.length --> returns number of parameters defined inside the function.
*/
let person5 = new Function('name',`
this.name = name;
this.greeting =function (){
    console.log(Hello);
}`) // this is the example for the statement that functions are also objects.

//const person = new Person('Trisha') converted in to Person.call({},'Trisha')

/*Primitive Values vs Reference types 
   Number              Object
   String              Array
   Boolean             function
   Symbol
   undefined
   null*/

let a =10;
let b = a;// b =10; simply copying the value of a.
console.log(b);
x = 20;
 console.log(b);//change in the value of a does not affect value of b so it is primitive data type.

 // Reference Type
  let c = {
    value: 10
  };
  console.log(c);
  let d = c;
  console.log(d);
  console.log(c);
  d.value =20;// this referencing the value in c as well as d
  console.log(c);
  console.log(d);

  //Enumerating properties of an Object

const user = {
    name :'Anbu',
    getFullName(){
        console.log(`My name is ${this.name}`)
    }
  }

for(let key in user){
    console.log(key,user[key]);
}

// By default objects are not iterable Object.keys() used to creat array that contains key's of object.
for(let key of Object.keys(user)){//object.keys(user) = [name,getFullName]
    console.log(key);
}   
//Object.entries(user) can return key and values in object['name','anbu'] and ['getFullName',f]
for(let entry of Object.entries(user)){//object.keys(user) = [name,getFullName]
    console.log(entry);
}
// cloning javascript object
let another =user;
console.log(another); 
let another1 ={};

for(let key in user){
    another1[key] = user[key];
}
console.log(another1)
//Object.assign(a,b) can able add items of 'b' object into the 'a' object
let another3 = Object.assign({age:24},user);
console.log(another3.age)
//Spread Operator --> used to copy the and use the object wherever you want ists syntac ...objectname
let another4 = {
    'sex': 'male',
    ...user
}
console.log(another4)

