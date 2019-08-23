
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
    }
};

/* Arrays */

const hobbies = ["sport","paint"];

for (let hobbie of hobbies){
    console.log(hobbie);
}

const array = (...args) =>{
    return args
}
console.log(array(1,2,3,4));

/* Spread */

const hbb = [...hobbies];
console.log(hbb);

/* Destructure */

const printName = ({name}) =>{
    console.log(name);
}

printName(person);

const {name,age} = person;
console.log(name,age);

const [hobby1,hobby2] = hobbies;
console.log(hobby1,hobby2);

/* async */

const fetchData = callback => {
    setTimeout(()=>{
        callback("done");
    },2000)
}

setTimeout( callback => {
    console.log("ready")
    fetchData(text => {
        console.log(text)
    })
},2000)

/*setInterval(() =>{
    console.log("hello");
},2000);*/

console.log(person.sumarizeUser(person.name,person.age,person.hobbie));