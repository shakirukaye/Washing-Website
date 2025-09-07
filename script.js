const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

//Set the date we're counting down to
var countDownDate = new Date("Jan 31, 2025 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


//sign-up event
document.getElementById("sign-up-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email-input").value.trim();
    let errorMessage = document.querySelector(".error-message");
    let successMessage = document.querySelector(".sign-up-success");

    if (email === "") {
        errorMessage.innerText = "Enter a valid email address";
        successMessage.innerText = ""; // Clear success message if any
    } else {
        errorMessage.innerText = ""; // Clear error message
        successMessage.innerText = email + " is registered successfully";
    }
});



  