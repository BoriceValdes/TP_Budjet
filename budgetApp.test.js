const { ajouterDepense, calculerMoyenneDepenses,calculerSolde } = require('./budgetApp');
const puppeteer = require('puppeteer');

describe('Calculer la moyenne des dépenses', () => {
    test('Retourne la moyenne correcte pour une catégorie donnée', () => {
        const depenses = [
            { categorie: 'alimentaire', montant: 50 },
            { categorie: 'alimentaire', montant: 150 },
            { categorie: 'loisirs', montant: 200 },
        ];
        expect(calculerMoyenneDepenses('alimentaire', depenses)).toBe(100);
    });

    test('Retourne 0 si la catégorie est vide', () => {
        const depenses = [];
        expect(calculerMoyenneDepenses('alimentaire', depenses)).toBe(0);
    });

    test('Retourne 0 pour une catégorie inexistante', () => {
        const depenses = [{ categorie: 'loisirs', montant: 200 }];
        expect(calculerMoyenneDepenses('alimentaire', depenses)).toBe(0);
    });

    test('Ajout d’une dépense met à jour le solde total', () => {
        const depenses = [];
        const revenus = [{ montant: 1000 }];
        ajouterDepense(depenses, 'alimentaire', 50, 'Courses');
        expect(calculerSolde(depenses, revenus)).toBe(950);
    });

    test('Ajout d’une dépense met à jour le solde total', () => {
        const depenses = [];
        const revenus = [{ montant: 1000 }];
        ajouterDepense(depenses, 'alimentaire', 50, 'Courses');
        expect(calculerSolde(depenses, revenus)).toBe(950);
    });



    test('Simulation d’ajout de dépense via l’UI sans framework', async () => {
        const browser = await puppeteer.launch({ headless: false }); // Définir à true pour les tests automatiques
        const page = await browser.newPage();

        try {
            // Chargez la page à partir du serveur HTTP
            await page.goto('http://localhost:8080', { waitUntil: 'domcontentloaded' });

            // Remplissez le formulaire
            await page.type('#category', 'alimentaire');
            await page.type('#amount', '50');
            await page.type('#description', 'Courses');
            await page.click('#submit');

            // Vérifiez la mise à jour du solde
            const solde = await page.$eval('#balance', el => el.textContent);
            expect(solde).toBe('950'); // Supposant que le solde initial est 1000 et que 50 a été soustrait
        } catch (error) {
            console.error('Erreur pendant le test Puppeteer:', error);
            throw error;
        } finally {
            await browser.close();
        }
    });


});
