document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const numberInput = document.querySelector('input[name="number"]');
    const numberBankOutput = document.getElementById('numberBank').querySelector('output');
    const oddsOutput = document.getElementById('odds').querySelector('output');
    const evensOutput = document.getElementById('evens').querySelector('output');
    const sortOneButton = document.getElementById('sortOne');
    const sortAllButton = document.getElementById('sortAll');

    let numberBank = [];

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const number = parseInt(numberInput.value, 10);
        if (!isNaN(number)) {
            numberBank.push(number);
            numberInput.value = '';
            updateNumberBankDisplay();
        }
    });

    sortOneButton.addEventListener('click', () => {
        if (numberBank.length > 0) {
            const number = numberBank.shift();
            sortNumber(number);
            updateNumberBankDisplay();
        }
    });

    sortAllButton.addEventListener('click', () => {
        numberBank.forEach(number => sortNumber(number));
        numberBank = [];
        updateNumberBankDisplay();
    });

    function sortNumber(number) {
        if (number % 2 === 0) {
            evensOutput.textContent += `${number} `;
        } else {
            oddsOutput.textContent += `${number} `;
        }
    }

    function updateNumberBankDisplay() {
        numberBankOutput.textContent = numberBank.join(' ');
    }
});

