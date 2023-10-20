const feature = document.getElementById('Features');
const ddone = document.getElementById("dd-one");
const ddtwo = document.getElementById("dd-two");

var count = 0;

// Add a click event listener
feature.addEventListener('click', function () {
    if (count == 0) {
        ddone.style.display = "none";
        count++;
    }
    else {
        ddone.style.display = "block";
        count--;
    }
});

