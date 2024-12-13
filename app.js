document.getElementById('submit').addEventListener('click', event => {
    event.preventDefault();

    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const description = document.getElementById('description').value;

    // Exemple simplifié de calcul de solde
    const balanceElement = document.getElementById('balance');
    const currentBalance = parseFloat(balanceElement.textContent);
    balanceElement.textContent = currentBalance - amount;

    console.log(`Dépense ajoutée : ${description} - ${amount} dans ${category}`);
});
