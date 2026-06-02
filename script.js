const form = document.getElementById("userform");
const greeting = document.getElementById("greeting");
const months = document.getElementById("months");
const adultContent = document.getElementById("adultcontent");
const quotes = document.getElementById("quotes")

// Function to calculate age in months
function calculateAgeInMonths(age) {
    return age * 12;
}

// Display user information
function displayUserData(){
    const storedName = localStorage.getItem("name");
    const storedAge = localStorage.getItem("age");

       if (storedName && storedAge) {

        // Personalized Greeting using template literals
        greeting.textContent = `Welcome back, ${storedName}!`;

        // Age in months
        months.textContent =
            `Your age in months is ${calculateAgeInMonths(storedAge)} months.`;

        // Adult content check using if...else
        if (storedAge >= 18) {
            adultContent.textContent =
                " You can access adult content.";
        } else {
            adultContent.textContent =
                " You are too young for adult content.";
        }

        // Display motivational quote 5 times using a loop
        quotes.innerHTML = "";

        for (let i = 1; i <= 5; i++) {
            const quote = document.createElement("p");
            quote.classList.add("quote");
            quote.textContent =
                `${i}. "Success comes to those who never give up."`;
            quotes.appendChild(quote);
        }
    }
}

// Save data to localStorage
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    localStorage.setItem("name", name);
    localStorage.setItem("age", age);

    displayUserData();

    form.reset();
});

// Load stored data when page opens
displayUserData();












