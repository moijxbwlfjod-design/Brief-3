# Projet de Modernisation de Plateforme Web

| Détail | Valeur |
| :--- | :--- |
| **Thème** | Modernisation de plateforme existante |
| **Travail** | Collectif (Squads) |
| **Durée** | 5 jours (du 20/10/2025 au 24/10/2025) |
| **Technologies** | HTML, CSS, JS (intégré), Parsley.js, Figma |
| **Interdiction** | Utilisation d'IA générative pour le code et le design |

---

## Objectif du Projet

L'objectif principal est de **moderniser** une plateforme web existante en la rendant entièrement **réactive** et **interactive**. Le site doit offrir une **meilleure navigation** et une **interface utilisateur (UI) plus engageante** en s'adaptant parfaitement à différents appareils (ordinateurs, tablettes, mobiles) grâce à des *breakpoints* et en intégrant des **composants interactifs** pour enrichir l'expérience utilisateur (UX).

---

## Consignes Très Importantes

* **Travail Collaboratif :** Le travail est réalisé en équipe (*squad*).
* **Répartition Équitable :** Chaque apprenant doit développer **au minimum cinq composants**. La répartition des tâches doit être équitable.
* **Interdiction IA Générative :** L'utilisation d'outils d'intelligence artificielle générative est **strictement interdite** pour le code et le design.
* **Conséquence du Non-Respect :** Tout manquement à ces consignes entraînera l'**invalidation du *brief*** pour l'ensemble de la *squad*, qui devra alors participer à une réunion de cadrage.

---

## Fonctionnalités Clés

| Fonctionnalité | Description |
| :--- | :--- |
| **Réactivité (Responsive Design)** | Sites entièrement adaptatifs pour une expérience optimale sur tous les appareils, en utilisant des *breakpoints* appropriés. |
| **Prototypage sur Figma** | Conception de maquettes interactives pour valider l'UI et le design avant le développement. |
| **Interactivité** | Intégration de composants engageants (formulaires, *modals*, menus déroulants, carrousels). Utilisation d'un fichier `script.js` modulaire pour simplifier la réutilisation et la maintenance. |
| **Validation des Formulaires (Parsley.js)** | Validation en temps réel avec **Parsley.js** pour une gestion d'erreurs intuitive et des messages clairs guidant l'utilisateur lors des soumissions. |
| **Performance & Accessibilité** | Optimisation des temps de chargement et conformité aux normes **WCAG** (Web Content Accessibility Guidelines) pour toutes les fonctionnalités interactives. |

---

## Analyse et Conception des Maquettes

Avant le développement, la *squad* doit réaliser :

1.  **Analyse du Thème :** Étude approfondie du thème et de l'audience cible.
2.  **Analyse Fonctionnelle :** Identification des fonctionnalités actuelles et des lacunes à combler.
3.  **Définition des Interfaces :** Conception de nouvelles interfaces et de parcours utilisateurs.
4.  **Maquettes Haute-Fidélité :** Création de maquettes de design sur **Figma** pour visualiser et ajuster les éléments avant le codage.

---

## User Stories Globales (Exemples)

* **En tant que designer UI/UX,** je veux mettre à jour les maquettes pour garantir une expérience utilisateur optimale et cohérente avec le design réactif et interactif.
* **En tant que développeur Front-end,** je veux intégrer des *breakpoints* et un menu de navigation adapté pour les mobiles et tablettes, afin de rendre le site réactif.
* **En tant que développeur Front-end,** je veux intégrer des composants interactifs (modals, carousels, dropdowns) de manière modulaire dans `script.js`, pour assurer la réutilisabilité et la maintenabilité du code.
* **En tant que testeur,** je veux m'assurer que chaque site est conforme aux normes d'accessibilité (WCAG), pour garantir son utilisation par des personnes ayant des besoins spécifiques.

---

## Composants Interactifs & Layouts Modulaires

La *squad* devra développer et intégrer une sélection de composants et de *layouts* modulaires, en privilégiant l'**interactivité** et la **réactivité**.

### Composants Interactifs (Exemples)
* **Hero Banner** avec *overlay* dégradé.
* **Grille de tournois à venir** (cartes avec bouton "S'inscrire").
* **Classement des joueurs (Leaderboard)** (tableau responsive).
* **Section “Match en direct”** (bloc stylisé, couleurs dynamiques via classes).
* **Timeline verticale des événements** (avec transitions CSS).
* **Menu latéral fixe (sidebar)** et **Header sticky** avec navigation fluide.
* **Formulaire d’inscription stylisé** avec *focus* animé et validation visuelle CSS.
* **Section FAQ en accordéon** (CSS-only).

### Layouts Modulaires (Exemples)
* **Dashboard utilisateur** (3 colonnes : profil, stats, tournois en cours).
* **Page d’accueil** avec grille asymétrique (CSS Grid).
* **Footer multi-colonnes** (liens, réseaux sociaux, mentions légales).
* **Page “Équipes”** avec filtres CSS-only.

---

## Breakpoints Recommandés

| Type d'Écran | Plage de Largeur |
| :--- | :--- |
| **Mobile (portrait)** | Jusqu'à 767px |
| **Mobile (paysage) / Tablette (portrait)** | De 768px à 1023px |
| **Tablette (paysage) / Petit écran d’ordinateur** | De 1024px à 1279px |
| **Grand écran d’ordinateur** | À partir de 1280px |

---

## Recommandations Générales

* Utilisation d’**unités relatives** (`rem`, `em`, `%`).
* **Optimisation des images** et des ressources.
* Respect des normes **WCAG** (Accessibilité).
* **Documentation du code** claire et précise.

---

## Modalités de Livraison et d'Évaluation

### Livrables

| Livrable | Date Limite | Contenu Attendu |
| :--- | :--- | :--- |
| **1. Sprint Planning** | 20/10 - 17h30 | Planification détaillée (Github Project/Trello), Répartition des tâches, Architecture technique, **Repository GitHub avec README**. |
| **2. UX/UI Design** | 21/10 - 17h30 | Maquettes haute-fidélité (.fig), **Design System complet**, Prototype interactif, Validation client des interfaces. |
| **3. Développement Front** | 24/10 - 16h30 | **Code *production ready***, Déploiement GitHub Pages, **Documentation technique + Compte Rendu**, Présentation client finale. |

### Évaluation

L'évaluation comprendra :
1.  **Présentation Finale (25 min) :** Démonstration du site (10 min) + Explication du code (15 min).
2.  **Challenge en Classe** (1h30 min + 15 min de QCM).

### Critères de Performance (Extraits)

* **Conformité** aux maquettes.
* **Compatibilité** multiplateforme (test sur navigateurs).
* Respect des **Bonnes Pratiques** (HTML sémantique, optimisation, accessibilité, documentation).
* **Interactivité** et utilisation appropriée des *breakpoints*.
* **Validation du code** (normes W3C).
* **Réponses de QCM Supérieures à 70%**.