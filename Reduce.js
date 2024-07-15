// ++++++++++++++++ Using Reduce ++++++++++++++++++

// Reduce simply returns the total of something and we mostly use it in e-Commerec cart project

const myValues = [10, 20, 30, 40, 50];

const myTotal = myValues.reduce( (accomulator, currentValue) => {
    console.log(`Accomulator: ${accomulator} , currentValue: ${currentValue}`);
    return accomulator + currentValue     // Here Accomulator takes 0 value as we have given it outside scope
}, 0 )

console.log(myTotal);