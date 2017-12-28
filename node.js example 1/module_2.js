//this is a module
//A module is a piece of javascript code that will be used in the main app ("app.js")
//when a module is made, the program automatically has an object "module.exports" by default.
//The default value for module.exports" isn equal to a blank object (module.exports = {})

//This module exports all the code in the object "module.exports"


//This uses the default object value for this module ("module.exports = {}") to send more then one piece of code at a time
module.exports = {
    print1Mod2: function () {
        console.log("This came from module 2. function = 'print1Mod2'");
    },
    print2Mod2: function () {
        console.log("This came from module_2. function = 'print2mod2'");
    }
};