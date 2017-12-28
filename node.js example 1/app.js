//This is an example of an oject
var dar = {
    favFood: "bacon",
    favMovie: "starwars"
};
console.log(dar.favFood, dar.favMovie);
//adds space
console.log('');






//examples of the "this" statement
var cole = {
    printFirstName: function (){
        console.log('my object is equal to cole');
        //"this" is a reference to the object ("cole") that is calling it
        console.log(this === cole);
}
};
//when this function runs it will print "true" because the object that is calling it is equal to "cole"
cole.printFirstName();
//this is an example of somthing that will print "false" because their is no object named "cole" that is callng the function
//NOTE: the default calling context/object is global.
function printSomthingWorthless(){
    console.log('my object is does(not) equal to cole');
    console.log(this === cole);
};
//This will print false
printSomthingWorthless();
//This is an example of somthing that will print "true" since the default calling context/object is equal to "global"
function printSomthingGlobal() {
  console.log('this is global');
  console.log(this === global);
};
//This will print "true"
printSomthingGlobal();
//adds space
console.log("");








var names = {
    firstName: 'Cole',
    lastName: 'Hill',
    printName: function () {
        console.log('welcome', names.firstName, names.lastName);
        console.log(this === names);
    }
};
names.printName();
//adds space
console.log("");







//This creates a function that can be used for mulitiple users
function User() {
    //"this" refers back to the object that calls it and is assigned the users name later on in the code
    this.name = "";
    //this starts each user with 100 health
    this.life = 100;
    /*this is a function that takes the parameter "targetPlayer" (which is the player that would lose health) and
    adds 1 to the target players health while at the same time decreasing the user who is giving health by 1
     */
    this.givelife = function givelife(targetPlayer) {
        targetPlayer.life += 1;
        this.life -= 1;
        console.log(this.name, 'gave one life to', targetPlayer.name)
    };
}
//this defines a new user, who's properties can be changed independently
var Darrell =  new User();
//this defines another new user who's properties can be changed independently
var Wendy = new User();
//this assigns "Darrell" to the name variable created in the "Users" function who's object is "Darrell"
Darrell.name = "Darrell";
//This assigns "Wendy" to the name variable created in the "Users" function who's object is equal to "Wendy"
Wendy.name = "Wendy";
//This calls the "giveLife" function using the "Darrell" object and assigns the object "Wendy" to the "targetPlayer" variable
Darrell.givelife(Wendy);
console.log("Darrell", Darrell.life, "Wendy", Wendy.life);

//this adds function "upperCut" to the the function "Users"
User.prototype.upperCut = function upperCut(targetPlayer){
    targetPlayer.life -= 3;
    console.log(this.name, "just uppercuted", targetPlayer.name);
};
//This uses the "Wendy" object to call the function "uppercut" that was just added into the "Users" function and assigns the object "Darrell" to the variable "targetPlayer"
Wendy.upperCut(Darrell);
//this displays both users health level
console.log("Darrell", Darrell.life, "Wendy", Wendy.life);
//This adds the property "magic" to the function "Users"
User.prototype.magic = 60;
//this prints both users "magic" level to the screen
console.log("Darrell's magic level is",Darrell.magic, "and Wendy's magic level is", Wendy.magic);
//adds space
console.log('');












//you can split up a javascript program into different files and these different files are called "modules"
//This code take code from the file "module_1" and assigns it to the variable "printModuleCode"
var printModleCode = require('./module_1');
//this runs the function "print1" that is located in module "module_1"
printModleCode.print1;
//This runs the function "print2" that is located in the module "module_1"
printModleCode.print2;
//adds space
console.log('');


//This assigns the code in "module_2" to the variable "mod2
var mod2 = require('./module_2');
//This runs the code from the module "module_2" that was placed in the default object "module.exports = {}"
mod2.print1Mod2();
mod2.print2Mod2();






