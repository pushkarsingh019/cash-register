let billAmount = document.getElementById('bill-amount');
let cashGiven = document.getElementById('cash-given');
let button = document.getElementById('event');
const notes = [2000,500,100,20,10,5,1];
let output = [];

// referencing the elements to show the output
let numberOf2000 = document.getElementById(`2000`);
let numberof500  = document.getElementById(`500`)
let numberof100 = document.getElementById(`100`)
let numberof20 = document.getElementById(`20`)
let numberof10 = document.getElementById(`10`)
let numberof5 = document.getElementById('5')
let numberof1 = document.getElementById(`1`);
const  outputIds = [numberOf2000, numberof500, numberof100, numberof20, numberof10,numberof5, numberof1]

function calculateChange(change){
    let tempChange = change;
    for(i = 0; i < notes.length ; i++){
        output[i] = Math.floor(tempChange / notes[i]);
        tempChange = tempChange % notes[i];
    };
    displayOutput();
};

function displayOutput(){
    for(var i  = 0; i <= output.length; i++){
        outputIds[i].innerHTML = output[i];
    }
}

function eventHandler(){
    let change = cashGiven.value - billAmount.value;
    calculateChange(change)
};

button.addEventListener('click', eventHandler)