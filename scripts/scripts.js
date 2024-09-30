let submitButton = document.getElementById("submit button");
let resultMessage = document.getElementById("result message");
let buttonTest = document.getElementById(" button test");

let subject = ["The men", "Gerald and Peter", "Tropical Fish", "People from New South Wales", "Turnips", "Ford Mustang cars"];
let verb = ["eat", "ignore", "suck", "frighten", "challenge"];
let object = ["pillows.", "honey.", "trees.", "grapefruits.", "wine glasses."];

function randomMessage (arr1, arr2, arr3){
    let partOne = arr1[Math.floor(Math.random() * arr1.length)];
    let partTwo = arr2[Math.floor(Math.random() * arr2.length)];
    let partThree = arr3[Math.floor(Math.random() * arr3.length)];
    console.log(partOne + " " + partTwo + " " + partThree);
    return resultMessage.textContent = partOne + " " + partTwo + " " + partThree;
    }

function buttonFn(){
    return randomMessage(subject, verb, object); 
}

submitButton.addEventListener('click', buttonFn);

