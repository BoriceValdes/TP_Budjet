function ajouterDepense(depenses, categorie, montant, description) {
    const nouvelleDepense = {
        categorie,
        montant,
        description,
    };
    depenses.push(nouvelleDepense);
    return depenses;
}

function calculerMoyenneDepenses(categorie, depenses) {
    const total = depenses
        .filter(depense => depense.categorie === categorie)
        .reduce((acc, depense) => acc + depense.montant, 0);

    const nombre = depenses.filter(depense => depense.categorie === categorie).length;

    if (nombre === 0) {
        return 0; // Prévention de la division par zéro
    }

    return total / nombre;
}


function calculerSolde(depenses, revenus) {
    const totalDepenses = depenses.reduce((acc, depense) => acc + depense.montant, 0);
    const totalRevenus = revenus.reduce((acc, revenu) => acc + revenu.montant, 0);
    return totalRevenus - totalDepenses;
}


// function calculerMoyenneDepenses(categorie, depenses) {
//     const total = depenses
//         .filter(depense => depense.categorie === categorie)
//         .reduce((acc, depense) => acc + depense.montant, 0);

//     const nombre = depenses.filter(depense => depense.categorie === categorie).length;

//     return total / nombre; // Erreur : division par zéro si `nombre` est 0
// }



module.exports = { ajouterDepense, calculerMoyenneDepenses,calculerSolde };
