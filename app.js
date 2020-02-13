// slowMath.add(6, 2)
//     .then((sum) => {
//         console.log(`Sum of 6 and 2 is ${sum}`);
//         return slowMath.multiply(sum, 2)
//     }).then((product) => {
//         console.log(`multiply that by 2 to get ${product}`);
//         return slowMath.divide(product, 4)
//     }).then((divided) => {
//         console.log(`divide that by 4 to get ${divided}`);
//         return slowMath.subtract(divided, 3)
//     }).then((subtracted) =>{
//         console.log(`subtract 3 to get ${subtracted}`);
//         return slowMath.add(subtracted, 98)
//     }).then((add98) => {
//         console.log(`add 98 to that to get ${add98}`);
//         return slowMath.remainder(add98, 2)
//     }).then((remainderAfterDividedBy2) => {
//         console.log(`the remainder of that after divided by 2 is ${remainderAfterDividedBy2}`);
//         return slowMath.multiply(remainderAfterDividedBy2, 50)
//     }).then((multipliedBy50) => {
//         console.log(`multiply that by 50 to get ${multipliedBy50}`);
//         return slowMath.remainder(multipliedBy50, 40)
//     }).then((remainderAfterDividedBy40) => {
//         console.log(`divide that by 40 and the remainder is ${remainderAfterDividedBy40}`);
//         return slowMath.add(remainderAfterDividedBy40, 32)
//     }).then((add32) => {
//         console.log(`add 32 to that to get ${add32}`);
//     })

async function doMath(){  
    try{
    const sum = await slowMath.add(6, 2);
    console.log(`Sum of 6 and 2 is ${sum}`);
    const product = await slowMath.multiply(sum, 2);
    console.log(`multiply that by 2 to get ${product}`);
    const divided = await slowMath.divide(product, 4);
    console.log(`divide that by 4 to get ${divided}`);
    const subtracted = await slowMath.subtract(divided, 3);
    console.log(`subtract 3 to get ${subtracted}`);
    const add98 = await slowMath.add(subtracted, 98);
    console.log(`add 98 to that to get ${add98}`);
    const remainderAfterDividedBy2 = await slowMath.remainder(add98, 2);
    console.log(`the remainder of that after divided by 2 is ${remainderAfterDividedBy2}`);
    const multipliedBy50 = await slowMath.multiply(remainderAfterDividedBy2, 50);
    console.log(`multiply that by 50 to get ${multipliedBy50}`);
    const remainderAfterDividedBy40 = await slowMath.remainder(multipliedBy50, 40);
    console.log(`divide that by 40 and the remainder is ${remainderAfterDividedBy40}`);
    const add32 = await slowMath.add(remainderAfterDividedBy40, 32);
    console.log(`add 32 to that to get ${add32}`);
    }
    catch (err) {
        console.log('You done fucked up');
        console.log(err);
    }
};

doMath();
