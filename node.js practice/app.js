
function order(orderNumber) {
    console.log("Order made", orderNumber);

    deliver( function (){
        console.log("Order delivered", orderNumber)
    })
}


function deliver (callback) {
    setTimeout(callback, 5000);
}
/*
order(1);
order(2);
order(3);
order(4);
order(5);
order(6);
*/



require('./module_2');
require('./module_3');



