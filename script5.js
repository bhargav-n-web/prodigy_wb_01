// Navbar scroll change color
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 0);
});

// Burger count functionality
let burgerCounts = {
    veg: 0,
    cheese: 0,
    patty: 0
};

document.querySelectorAll(".add-button").forEach(button => {
    button.addEventListener("click", function () {
        let burgerType = this.dataset.burger;
        burgerCounts[burgerType]++;
        document.getElementById(burgerType + "-order-count").textContent = burgerCounts[burgerType];
        updateTotalAmount();
    });
});

document.querySelectorAll(".remove-button").forEach(button => {
    button.addEventListener("click", function () {
        let burgerType = this.dataset.burger;
        if (burgerCounts[burgerType] > 0) {
            burgerCounts[burgerType]--;
            document.getElementById(burgerType + "-order-count").textContent = burgerCounts[burgerType];
            updateTotalAmount();
        }
    });
});

// Update total amount to pay
function updateTotalAmount() {
    let totalAmount = burgerCounts.veg * 190 + burgerCounts.cheese * 220 + burgerCounts.patty * 220;
    document.getElementById("total-amount-message").textContent = "Pay " + totalAmount.toFixed(2);
}

// Handle login and payment
document.getElementById("login-button").addEventListener("click", function () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username && password) {
        window.location.href = "payment.html"; // Redirect to payment page
    } else {
        alert("Please enter username and password.");
    }
});

// Star rating functionality
let selectedRating = 0;

document.querySelectorAll(".star").forEach(star => {
    star.addEventListener("click", function () {
        selectedRating = this.dataset.value;
        document.querySelectorAll(".star").forEach(s => {
            s.classList.remove("selected");
        });
        for (let i = 0; i < selectedRating; i++) {
            document.querySelectorAll(".star")[i].classList.add("selected");
        }
    });
});

document.getElementById("submit-rating").addEventListener("click", function () {
    if (selectedRating > 0) {
        document.getElementById("submit-message").style.display = "block";
        setTimeout(() => {
            document.getElementById("submit-message").style.display = "none";
        }, 3000);

        // Simulate updating the average rating
        let averageRating = Math.floor(Math.random() * 5) + 1;
        document.getElementById("average-rating").textContent = averageRating;
    } else {
        alert("Please select a rating.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector('.about');

    // Add 'active' class when the About section is clicked
    aboutSection.addEventListener('click', function () {
        aboutSection.classList.toggle('active');
    });

    // Optional: Remove 'active' class when clicking outside the About section
    document.addEventListener('click', function (event) {
        if (!aboutSection.contains(event.target)) {
            aboutSection.classList.remove('active');
        }
    });
});

// JavaScript to handle navbar background color change on scroll
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 0);
});
