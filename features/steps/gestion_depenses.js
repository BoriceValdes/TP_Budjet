const { Given, When, Then } = require('@cucumber/cucumber');
const { ajouterDepense } = require('../../budgetApp');
const assert = require('assert');

let depenses = [];
let solde = 0;

Given('un utilisateur a une liste de dépenses vide', () => {
    depenses = [];
});

When('il ajoute une dépense de {int} dans la catégorie {string}', (montant, categorie) => {
    depenses = ajouterDepense(depenses, categorie, montant, 'Courses');
    solde -= montant;
});

Then('la liste des dépenses doit contenir cette dépense', () => {
    assert.strictEqual(depenses.length, 1);
    assert.strictEqual(depenses[0].categorie, 'alimentaire');
});

Then('le solde total doit être mis à jour', () => {
    assert.strictEqual(solde, -50);
});
