///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// My Code
// const summedPrice = cart.reduce((price, i))
// console.log(summedPrice)

function callbackFunc(prevValue, currentValue) {
    return prevValue + currentValue.price
}

let summedPrice = cart.reduce(callbackFunc, 0)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

// My Code
// function calcFinalPrice(cartTotal, couponValue, tax) {
//     let tax = .06 + 1                                     // not needed
//     let cartTotal = (cartTotal * tax) - couponValue       // need return
// }

// Correct Code
function calcFinalPrice(cartTotal, couponValue, tax) {
    let cartTotal = (cartTotal * tax) - couponValue
    return cartTotal
}

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    age: number, identifies difference between kids, adults, and elderly
    group: boolean, differentiates wether solo or in a group
    time: number(2400 time clock), can tell if they ate breakfast, lunch, or dinner
    bill: number, keep track of how much a customer might spend, depending on time or group


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customer = {
    age: 34,
    group: false,
    time: 1230,
    bill: 15.36
}
