Feature: Gestion des dépenses
  Scenario: Ajouter une dépense
    Given un utilisateur a une liste de dépenses vide
    When il ajoute une dépense de 50 dans la catégorie "alimentaire"
    Then la liste des dépenses doit contenir cette dépense
    And le solde total doit être mis à jour
