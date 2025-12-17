# Générateur de clés de sécurité basé sur le crible d'Ératosthène

Ce projet implémente un générateur de clés de sécurité en Node.js, utilisant le **crible d'Ératosthène** pour produire des nombres premiers, puis les combine aléatoirement pour créer des clés uniques.

## Fonctionnalités
- Génération de nombres premiers jusqu'à une limite donnée.
- Création de clés de sécurité aléatoires à partir de ces nombres.
- Longueur de clé personnalisable.

## Prérequis
- Node.js (version 14 ou supérieure)

## Installation
1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/alphaleadership/eratosthene-key-generator.git
   ```
2. Accédez au dossier du projet :
   ```bash
   cd eratosthene-key-generator
   ```
3. Installez les dépendances (si nécessaire) :
   ```bash
   npm install
   ```

## Utilisation
1. Exécutez le programme :
   ```bash
   node index.js
   ```
2. Le programme affichera une clé de sécurité générée aléatoirement.

## Personnalisation
- Modifiez la variable `limit` dans `index.js` pour changer la plage de nombres premiers.
- Modifiez la variable `keyLength` pour ajuster la longueur de la clé.

## Exemple de sortie
```
Clé de sécurité générée (16 chiffres) : 733719234759767
```

## Licence
MIT