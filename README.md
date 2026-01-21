# Projet Final DevOps – Site Vitrine Personnel Conteneurisé

## Étudiant
**MAES Baptiste** (DEV)

## Sujet
Déploiement d’une application web conteneurisée avec Docker et Docker Compose

---

##  Présentation du projet
Ce projet consiste à concevoir et déployer un **site vitrine personnel**
reposant sur une architecture web conteneurisée.

L’objectif est de mettre en pratique les concepts fondamentaux de **Docker**
et **Docker Compose** à travers une application web simple mais structurée,
composée de plusieurs services isolés.

Le projet est conçu pour évoluer vers une architecture complète
incluant une **base de données relationnelle**.

---

##  Fonctionnalités
- Affichage d’un site vitrine personnel
- Communication entre un frontend et une API backend
- Préparation à l’intégration d’une base de données
- Déploiement multi-conteneurs via Docker Compose

---

##  Architecture technique
L’application repose sur une architecture en plusieurs services :

- **Frontend Web**  
  Site vitrine statique développé en HTML / JavaScript, servi par Nginx

- **Backend API**  
  API REST développée en Node.js avec Express

- **Base de données (en cours d’intégration)**  
  Base de données relationnelle PostgreSQL destinée au stockage des données

- **Docker & Docker Compose**  
  Chaque composant est conteneurisé et orchestré via Docker Compose

Un schéma d’architecture est disponible dans le fichier `architecture.puml`.

---

##  Schéma simplifié

Client Web  
↓  
Frontend (Nginx)  
↓  
Backend API (Node.js / Express)  
↓  
Base de données (PostgreSQL)

---

##  Technologies utilisées
- Docker
- Docker Compose
- Node.js
- Express
- Nginx
- HTML / JavaScript
- Git & GitHub
- PostgreSQL (en cours d’intégration)

---

##  Prérequis
- Docker Desktop
- Git

---

##  Lancement du projet

```bash
docker-compose up -d --build
```

## Accès aux services 

Frontend : http://localhost:8080
Backend : http://localhost:3000

## Fonctionnement 

Le frontend consomme l’API backend via des requêtes HTTP.
Les services sont exécutés dans des conteneurs Docker distincts
et communiquent grâce au réseau interne créé par Docker Compose.

La politique CORS est gérée côté backend afin d’autoriser
les requêtes provenant du frontend.

## Utilisation de l'IA

Dans le cadre de ce projet, des outils d’intelligence artificielle
(notamment ChatGPT) ont été utilisés comme support pour 
- comprendre les concepts Docker
- structurer l’architecture du projet
- générer des exemples de configuration

## Évolutions prévues

- Finalisation de l’intégration de la base de données PostgreSQL
- Ajout de routes API connectées à la base
- Mise en place d’un reverse proxy
- Déploiement sur un serveur distant

## Auteur 

MAES Baptiste 
Projet réalisé en solo