function placeAnOrder(orderNumber){
    console.log('Custumer order', orderNumber);
    cookAndDeliverFood(function () {
        console.log('delivered food order', orderNumber);
    });
};

//sometime = 5 sec
//"callback" is some code that runs after the 5 seconds
function cookAndDeliverFood(callback){
    //"setTimeout" does not stop the program. It continues through the rest of the code then in 5 seconds runs the function that was passed into the callback method
    setTimeout(callback, 5000);
};

//simulate user web request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);
