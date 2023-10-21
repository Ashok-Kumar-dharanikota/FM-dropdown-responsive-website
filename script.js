const feature = document.getElementById('Features');
const company = document.getElementById('Company');

const ddone = document.getElementById("dd-one");
const ddtwo = document.getElementById("dd-two");

const ddArrowOne = document.getElementById('dd-one-arrow');
const ddArrowTwo = document.getElementById('dd-two-arrow');

var count1 = 0;
var count2 = 0;

// Add a click event listener
feature.addEventListener('click', function () {
    if (count1 == 0) {
        ddone.style.display = "none";
        ddArrowOne.src = "./images/icon-arrow-up.svg"
        count1++;
    }
    else {
        ddone.style.display = "block";
        ddArrowOne.src = "./images/icon-arrow-down.svg"
        count1--;
    }
});


company.addEventListener('click', function () {
    if (count2 == 0) {
        ddtwo.style.display = "none";
        ddArrowTwo.src = "./images/icon-arrow-up.svg"
        count2++;
    }
    else {
        ddtwo.style.display = "block";
        ddArrowTwo.src = "./images/icon-arrow-down.svg"
        count2--;
    }
});
