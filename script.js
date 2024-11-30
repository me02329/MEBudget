
document.getElementById('budget-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const type = document.getElementById('type').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (!date || !type || isNaN(amount)) {
        alert('Please fill in all fields correctly.');
        return;
    }

    const statsOutput = document.getElementById('stats-output');
    const newEntry = document.createElement('p');
    newEntry.textContent = `${date} - ${type}: $${amount.toFixed(2)}`;
    statsOutput.appendChild(newEntry);

    document.getElementById('budget-form').reset();
});
