// JavaScript Objects and Construtors

// --------------------------------------------------------------------------------------------------


function Person(name, email, phone) { 
    this.name = name; 
    this.email = email; 
    this.phone = phone; 
} 

Person.prototype.greet = function(other) { 
    console.log('Hello ' + other.name + ', I am ' + this.name + '!'); 
};

// --------------------------------------------------------------------------------------------------

// 1.

sonny = new Person({
    name: "Sonny",
    email: "sonny@hotmail.com",
    phone: '483-485-4948'
});

console.log(sonny);