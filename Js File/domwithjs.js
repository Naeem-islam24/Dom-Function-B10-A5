// First Donation part
document.getElementById('donate-one').addEventListener('click', function () {

    // For Current time
    const now = new Date();
    const currentDateTime = now.toLocaleString();

    const donation = getInputFieldValueById('input-one');
    const donationValue = parseFloat(donation);
    console.log(donationValue);


    const balance = document.getElementById('donate-balance');
    const balanceValue = parseFloat(balance.innerText);
    const newBalance = balanceValue + donationValue;

    document.getElementById('donate-balance').innerText = newBalance;

    const myBalance = document.getElementById('my-balance');
    const myBalanceValue = parseFloat(myBalance.innerText);
    const myNewBalance = myBalanceValue - donationValue;

    if (donationValue > myBalanceValue) {
        alert('Sorry,You Do not have enough balance.');
        return;
    }
    const div = document.createElement('div');
    div.classList.add('bg-yellow-300');
    div.classList.add('rounded-lg');
    div.innerHTML = ` 
        <h4 class="text-2xl px-4 py-2 font-medium">Donation Amount:</h4>
        <p class="px-4 pb-2 font-bold my-2">${donationValue} .Taka is donated for Flood Relief in Noakhali,Bangladesh.</p>
        <p class="px-4 pb-2 font-bold my-2" >Time: ${currentDateTime}</p>
        `
    document.getElementById('history-container').appendChild(div);


    document.getElementById('my-balance').innerText = myNewBalance;

})


// Second Donation part
document.getElementById('donate-two').addEventListener('click', function () {

    // For Current time
    const now = new Date();
    const currentDateTime = now.toLocaleString();

    const donation = getInputFieldValueById('input-two');
    const donationValue = parseFloat(donation);
    console.log(donationValue);

    const balance = document.getElementById('donate-balance2');
    const balanceValue = parseFloat(balance.innerText);
    const newBalance = balanceValue + donationValue;

    document.getElementById('donate-balance2').innerText = newBalance;

    const myBalance = document.getElementById('my-balance');
    const myBalanceValue = parseFloat(myBalance.innerText);
    const myNewBalance = myBalanceValue - donationValue;

    if (donationValue > myBalanceValue) {
        alert('Sorry,You Do not have enough balance.');
        return;
    }

    const div = document.createElement('div');
    div.classList.add('bg-yellow-300');
    div.classList.add('rounded-lg');
    div.innerHTML = ` 
        <h4 class="text-2xl px-4 py-2 font-medium">Donation Amount:</h4>
        <p class="px-4 pb-2 font-bold my-2">${donationValue} .Taka is donated for Flood Relief in Feni,Bangladesh.</p>
         <p class="px-4 pb-2 font-bold my-2" >Time: ${currentDateTime}</p>
        `
    document.getElementById('history-container').appendChild(div);

    document.getElementById('my-balance').innerText = myNewBalance;

})


// Third Donation part
document.getElementById('donate-three').addEventListener('click', function () {

    // For Current time
    const now = new Date();
    const currentDateTime = now.toLocaleString();

    const donation = getInputFieldValueById('input-three');
    const donationValue = parseFloat(donation);
    console.log(donationValue);

    const balance = document.getElementById('donate-balance3');
    const balanceValue = parseFloat(balance.innerText);
    const newBalance = balanceValue + donationValue;

    document.getElementById('donate-balance3').innerText = newBalance;

    const myBalance = document.getElementById('my-balance');
    const myBalanceValue = parseFloat(myBalance.innerText);
    const myNewBalance = myBalanceValue - donationValue;

    if (donationValue > myBalanceValue) {
        alert('Sorry,You Do not have enough balance.');
        return;
    }

    const div = document.createElement('div');
    div.classList.add('bg-yellow-300');
    div.classList.add('rounded-lg');
    div.innerHTML = ` 
        <h4 class="text-2xl px-4 py-2 border-solid rounded-lg font-medium">Donation Amount:</h4>
        <p class="px-4 pb-2 font-bold my-2">${donationValue} .Taka is donated for Injured in the Quota Movement.</p>
         <p class="px-4 pb-2 font-bold my-2" >Time: ${currentDateTime}</p>
        `
    document.getElementById('history-container').appendChild(div);
    document.getElementById('my-balance').innerText = myNewBalance;

})


// First donation button alert
const donateButton = document.getElementById("donate-one");
const donationAmountField = document.getElementById("input-one");

donateButton.addEventListener("click", function () {
    const donationAmount = donationAmountField.value;

    if (donationAmount && donationAmount > 0) {
        window.alert("Congrats! You are donating " + donationAmount + " BDT Successfully! ");
    } else {
        window.alert("Please enter a valid donation amount.");
    }
});

// Second donation button alert
const donateButton2 = document.getElementById("donate-two");
const donationAmountField2 = document.getElementById("input-two");

donateButton2.addEventListener("click", function () {
    const donationAmount2 = donationAmountField2.value;

    if (donationAmount2 && donationAmount2 > 0) {
        window.alert("Congrats! You are donating " + donationAmount2 + " BDT Successfully! ");
    } else {
        window.alert("Please enter a valid donation amount.");
    }
});

// Third donation button alert
const donateButton3 = document.getElementById("donate-three");
const donationAmountField3 = document.getElementById("input-three");

donateButton3.addEventListener("click", function () {
    const donationAmount3 = donationAmountField3.value;

    if (donationAmount3 && donationAmount3 > 0) {
        window.alert("Congrats! You are donating " + donationAmount3 + " BDT Successfully!");
    } else {
        window.alert("Please enter a valid donation amount.");
    }
});


