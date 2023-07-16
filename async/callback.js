/*setTimeout(() => {
    console.log("Call me back after 5 seconds") }, 5000);

    setTimeout(() =>{
        console.log("Call me back after 1 seconds")
    }, 2000);
    console.log("I'm first"); 

    const fs = require("fs");

    fs.readFile("sample.txt", "utf-8", function(err, data){
        if(err === null){
            console.log("Success!");
            console.log(data);
        }else {
            console.log(`Wahala: ${err}`);
        }
    });
    console.log("second")  */

    function func(resolve, reject){
        setTimeout(() => {
            console.log("In setTimeout callback...")
            resolve("Timed out for 5 seconds")
        }, 5000)
    }
    function callback(value){
        console.log("In callbackfn function")
        console.log(value);
    }
    const promise = new Promise(func)
    promise
    .then(callback)
    .catch(() => { console.log("Wahala dey")});