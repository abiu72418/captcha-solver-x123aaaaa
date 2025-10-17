document.getElementById('captchaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('captchaUrl').value;
    const captchaDisplay = document.getElementById('captchaDisplay');
    const solvedText = document.getElementById('solvedText');

    captchaDisplay.innerHTML = `<img src='${url}' alt='Captcha Image' />`;

    // Simulate captcha solving
    setTimeout(() => {
        const solved = 'Sample Solved Text'; // Replace with actual solving logic
        solvedText.innerText = `Solved Captcha Text: ${solved}`;
    }, 15000);
});