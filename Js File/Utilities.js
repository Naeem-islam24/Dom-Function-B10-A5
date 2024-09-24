function getInputFieldValueById(id) {
    const donation = document.getElementById(id).value;
    // const donationConvert=parseFloat(donation);
    return donation;
}


function showSectionById(id){

    document.getElementById('donation-part').classList.add('hidden');
    document.getElementById('history-part').classList.add('hidden');
  
    document.getElementById(id).classList.remove('hidden');


}

document.getElementById('donate-btn').addEventListener('click',function(){

    showSectionById('donation-part');
})

document.getElementById('history-btn').addEventListener('click',function(){

    showSectionById('history-part');
})