document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from a text file (options.txt)
    fetch('options.txt')
        .then(response => response.text())
        .then(data => {
            // Split the data into an array of options
            const options = data.split('\n');

            // Display each option on the webpage
            const optionsContainer = document.getElementById('options');
            options.forEach(option => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.textContent = option;
                optionsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});