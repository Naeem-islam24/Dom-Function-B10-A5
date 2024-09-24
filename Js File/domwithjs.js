// First Donation part
document.getElementById('donate-one').addEventListener('click', function () {

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
        `
    document.getElementById('history-container').appendChild(div);


    document.getElementById('my-balance').innerText = myNewBalance;

})


// Second Donation part
document.getElementById('donate-two').addEventListener('click', function () {

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
        <h4 class="text-2xl font-medium">Donation Amount:</h4>
        <p>${donationValue} .Taka is donated for Flood Relief in Feni,Bangladesh.</p>
        `
    document.getElementById('history-container').appendChild(div);

    document.getElementById('my-balance').innerText = myNewBalance;

})


// Third Donation part
document.getElementById('donate-three').addEventListener('click', function () {

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
        <h4 class="text-2xl p border-solid rounded-lg font-medium">Donation Amount:</h4>
        <p>${donationValue} .Taka is donated for Injured in the Quota Movement.</p>
        `
    document.getElementById('history-container').appendChild(div);
    document.getElementById('my-balance').innerText = myNewBalance;

})

