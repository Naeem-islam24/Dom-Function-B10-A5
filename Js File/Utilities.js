function getInputFieldValueById(id) {
    const donation = document.getElementById(id).value;
    return donation;
}


function showSectionById(id) {

    document.getElementById('donation-part').classList.add('hidden');
    document.getElementById('history-part').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');


}

document.getElementById('donate-btn').addEventListener('click', function () {

    showSectionById('donation-part');
})

document.getElementById('history-btn').addEventListener('click', function () {

    showSectionById('history-part');
})

// Button Color Changing when press
document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('donate-btn').classList.remove('bg-lime-400');
    document.getElementById('history-btn').classList.add('bg-lime-400');

});
document.getElementById('donate-btn').addEventListener('click', function () {
    document.getElementById('donate-btn').classList.add('bg-lime-400');
    document.getElementById('history-btn').classList.remove('bg-lime-400');


});


document.getElementById('goToPageButton').addEventListener('click', function () {
    window.location.href = './blog.html';
});

document.getElementById('goBackButton').addEventListener('click', function () {
    // window.history.back();  
    window.location.href = 'index.html';
});


document.getElementById("dropdown-button").addEventListener("click", function () {
    const menu = document.getElementById("dropdown-menu");
    const arrow = document.getElementById("down-arrow3");

    if (menu.style.display === "none" || menu.style.display === "") {

        menu.style.display = "block";
        arrow.classList.remove("fa-chevron-down");
        arrow.classList.add("fa-chevron-up");
    }
    else {

        menu.style.display = "none";
        arrow.classList.remove("fa-chevron-up");
        arrow.classList.add("fa-chevron-down");
    }
});




