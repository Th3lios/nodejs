var name = "Max";
var age = 23;
var hasHobbies = true;

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



console.log(person.sumarizeUser(person.name,person.age,person.hobbie));