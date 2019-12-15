/* Variables */

var name = "Elias"
var age = 25
var hasHobbies = true

const name = "Felipe" /* This doesn't change */
let age = 26 /* Can change */

/* Functions */

function example(){
    return "pass";
}

const example = function(){
    return "pass";
}

const example = () => {
    return "pass";
}

const example = () => 1 + 2;
const example = (a,b) => a + b;
const example = a => a;


/* Object */
const person = {
    name: "max",
    age: 23,
    hobbie: true,
    sumarizeUser: (userName,userAge,userHobby) => {
        return ('Name is '+
                userName +
                ', age is '+
                userAge +
                ', and the user has hobbies: '+
                userHobby);
    },
    User: () => {
        return ('Name is '+
                this.userName +
                ', age is '+
                this.userAge +
                ', and the user has hobbies: '+
                this.userHobby);
    },
    User(){
        return ('Name is '+
                this.userName +
                ', age is '+
                this.userAge +
                ', and the user has hobbies: '+
                this.userHobby);
    }
};

/* Arrays */

const hobbies = ["sport","paint"];

console.log(hobbies.map(hobby =>{
    return 'hobbie: ' + hobby
}))

for (let hobbie of hobbies){
    console.log(hobbie);
}

const array = (...args) =>{
    return args
}
console.log(array(1,2,3,4));

/* Spread */

const hbb = [...hobbies]; /* It takes all the array and take off all values to put in another array completly new */
console.log(hbb);

let arr = ['a','b','c']; 
let arr2 = [...arr]; 
  
console.log(arr); // [ 'a', 'b', 'c' ] 
  
arr2.push('d'); //inserting an element at the end of arr2 
  
console.log(arr2); // [ 'a', 'b', 'c', 'd' ] 
console.log(arr); // [ 'a', 'b', 'c' ] 

/* Rest operator */

const example = (...args) => { /* It takes all the args that you want */
    return [arg1, arg2, arg3]
}

/* Destructure */

const printName = ({name}) =>{ /* Just using the name property you can use the name prop of any object */
    console.log(name);
}

printName(person); 

const {name,age} = person;
console.log(name,age);

const [hobby1,hobby2] = hobbies;
console.log(hobby1,hobby2);

/* async */

const fetchData = callback =>{
    setTimeout(() => {
        callback("done!")
    },1500)
}

setTimeout(()=>{
    console.log("hola")
    fetchData(text =>{
        console.log(text)
    })
}, 1000)

/* Promises */

const fetchData = () =>{
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("done!")
        },1500)
    });
    return promise
}

setTimeout(()=>{
    console.log("hola")
    fetchData()
        .then(text =>{
            console.log(text)
            return fetchData()
        })
        .then(text2 =>{
            console.log(text2)
        })
}, 1000)

/* setInterval(() =>{
    console.log("hello");
},2000);*/

console.log(person.sumarizeUser(person.name,person.age,person.hobbie));