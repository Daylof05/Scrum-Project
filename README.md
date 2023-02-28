# ProjetE4-React
## Grille frontend: (sur 40 points)

#### Partie:
- l'écran d'accueil s'affiche correctement (logo + bouton créer partie + bouton rejoindre partie).1/1
- on peut créer une partie : 3/3
- on peut rejoindre une partie : 3/3
- on peut quitter une partie : 1/1
- on affiche le nom d'utilisateur sur chaque page : 1/1
- l'écran d'accueil de la partie s'affiche correctement : 0.75/1
  - on voit : nom du user, nom de la partie, code de la partie, numéro du jour (de 1 à l'infini)

#### Sprints:
- on peut lister les sprints : 3/3
- on peut créer un sprint : 3/3
- on peut modifier un sprint : 0/1
- on peut supprimer un sprint : 1/1

#### User Stories:
- on peut lister les stories : 3/3
- on peut créer une story : 3/3
- on peut modifier une story : 0/1
- on peut attacher une story à un sprint : 0/1
- on peut supprimer une story : 1/1

#### Daily:
- on peut démarrer un daily : 1/1
- on peut cloturer un daily (et passer au jour suivant) : 0.5/1
- on peut valider une productivité en répondant à un QCM : 0/3
- on peut subir un aléa de productivité : 0/3

#### Tests:
- des tests automatisés permettent de valider 3 stories (du projet, pas du jeu) : 0/6

#### Bonus:
- on peut afficher le Burndown chart du projet (release plan) : 0/3
- on peut afficher le Burndown chart du sprint : 0/3



## Grille backend (sur 30 points) :
- des routes permettent de créer/supprimer une partie : 2/2
- une route permet d'ajouter un user à une partie : 1/1
- une route permet d'enlever un user d'une partie : 1/1
- les routes CRUD sont correctement paramétrées pour les sprints : 3.5/5
- les routes CRUD sont correctement paramétrées pour les stories : 3.5/5
- une route permet d'attacher une story à un sprint : 0/1
- une route permet de détacher une story d'un sprint : 0/1
- des routes permettent de générer une productivité (choix d'une story, réponse au QCM) : 0/2
- des routes permettent de démarrer/cloturer un daily (passer au jour suivant) : 1.5/2
- les modèles de données BDD sont créés correctement : 2/2
- les routes sont correctement connectées à la BDD : 2/2

#### Tests:
- des tests unitaires permettent de tester le calcul d'une productivité : 0/1
- des tests unitaires permettent de tester l'aléa d'une productivité : 0/1
- des tests unitaires permettent de tester le validation QCM d'une productivité : 0/1
- des tests d'integration permettent de tester les routes de participation au daily (routes + productivités) : 0/3


Message de fin:
Il nous manque tout ce qui est modifications (sprints, stories, users), gestion des rôles (tout le monde ne peut pas tout faire), l'aspect QCM, les tests, et nous nous sommes rendus compte que nous n'avons rien relié à la partie concrètement (on ne se sert du code de la partie que pour la rejoindre).
