# Guide de Maintenance du Site PAPS sur GitHub

Ce guide explique comment maintenir et mettre à jour le site web de PAPS directement depuis le site GitHub, sans avoir besoin de connaissances techniques.

## 📋 Table des Matières

1. [Accéder au Repository](#accéder-au-repository)
2. [Ajouter de Nouvelles Images](#ajouter-de-nouvelles-images)
3. [Ajouter un Nouvel Article (Post)](#ajouter-un-nouvel-article-post)
4. [Modifier un Article Existant](#modifier-un-article-existant)
5. [Modifier les Pages Principales](#modifier-les-pages-principales)
6. [Modifier les Informations de Contact](#modifier-les-informations-de-contact)
7. [Modifier le Carrousel de la Page d'Accueil](#modifier-le-carrousel-de-la-page-daccueil)
8. [Conseils Importants](#conseils-importants)

---

## 🔗 Accéder au Repository

1. Allez sur [GitHub.com](https://github.com)
2. Connectez-vous avec votre compte GitHub
3. Naviguez vers le repository du site [PAPS](https://assopaps.github.io/paps)
4. Vous verrez tous les fichiers et dossiers du site

---

## 📸 Ajouter de Nouvelles Images

### Étape 1 : Naviguer vers le dossier images
1. Cliquez sur le dossier `images` dans la liste des fichiers
2. Choisissez le sous-dossier approprié :
   - `images/carousel/` : pour les images du carrousel de la page d'accueil
   - `images/posts/` : pour les images des articles
   - `images/about/` : pour les images de la page "Qui sommes-nous"
   - `images/` (racine) : pour les autres images générales

### Étape 2 : Ajouter l'image
1. Cliquez sur le bouton **"Add file"** puis **"Upload files"**
2. Glissez-déposez votre image ou cliquez sur **"choose your files"**
3. Attendez que l'upload se termine
4. En bas de la page, dans la section "Commit changes" :
   - Titre : `Ajout nouvelle image [nom de l'image]`
   - Description : `Ajout de [description de l'image] pour [usage prévu]`
5. Cliquez sur **"Commit changes"**

### ⚠️ Important pour les images :
- **Format** : Utilisez JPG ou PNG
- **Taille** : Maximum 2MB par image
- **Nom** : Utilisez des noms simples sans espaces (ex: `mission_senegal_2024.jpg`)
- **Dimensions recommandées** :
  - Carrousel : 1200x675 pixels (ratio 16:9)
  - Articles : 800x600 pixels
  - Page "Qui sommes-nous" : 600x400 pixels

---

## ✍️ Ajouter un Nouvel Article (Post)

### Étape 1 : Naviguer vers le dossier des articles
1. Cliquez sur le dossier `_posts`
2. Vous verrez tous les articles existants

### Étape 2 : Créer un nouvel article
1. Cliquez sur **"Add file"** puis **"Create new file"**
2. Nommez votre fichier selon ce format : `YYYY-MM-DD-titre-de-larticle.md`
   - Exemple : `2024-03-15-nouvelle-mission-dakar.md`

### Étape 3 : Écrire l'article
Copiez et adaptez ce modèle dans votre nouveau fichier :

```markdown
---
layout: post
title: "Titre de votre article"
date: 2024-03-15
author: "Nom de l'auteur"
featured_image: "nom-de-votre-image.jpg"
excerpt: "Résumé court de l'article qui apparaîtra sur la page d'accueil"
---

Écrivez ici le contenu de votre article.

Vous pouvez utiliser :
- **Texte en gras**
- *Texte en italique*
- [Liens](https://example.com)

## Sous-titre

Continuez votre article ici.

### Sous-sous-titre

Pour ajouter une image dans l'article :
![Description de l'image]({{ site.baseurl }}/images/posts/votre-image.jpg)
(modifiez uniquement la description et le nom de l'image)
```

### Étape 4 : Publier l'article
1. En bas de la page, dans "Commit changes" :
   - Titre : `Nouvel article: [titre de votre article]`
   - Description : `Publication de l'article sur [sujet]`
2. Cliquez sur **"Commit changes"**

---

## 📝 Modifier un Article Existant

### Étape 1 : Trouver l'article
1. Allez dans le dossier `_posts`
2. Cliquez sur l'article que vous voulez modifier

### Étape 2 : Modifier l'article
1. Cliquez sur l'icône crayon (✏️) en haut à droite du contenu
2. Modifiez le texte selon vos besoins
3. Utilisez l'onglet **"Preview"** pour voir le résultat

### Étape 3 : Sauvegarder les modifications
1. En bas de la page, dans "Commit changes" :
   - Titre : `Modification article: [titre de l'article]`
   - Description : `Mise à jour de [ce qui a été modifié]`
2. Cliquez sur **"Commit changes"**

---

## 📄 Modifier les Pages Principales

### Pages disponibles :
- `pages/qui-sommes-nous.md` : Page "Qui sommes-nous"
- `pages/nos-projets.md` : Page "Nos projets"
- `pages/nous-soutenir.md` : Page "Nous soutenir"
- `pages/contact.md` : Page "Contact"

### Pour modifier une page :
1. Naviguez vers le dossier `pages`
2. Cliquez sur la page à modifier
3. Cliquez sur l'icône crayon (✏️)
4. Modifiez le contenu
5. Sauvegardez avec un message de commit approprié

### ⚠️ Important pour les modifications :
- Ne modifiez que le texte sur la page à moins que vous ne sachiez ce que vous faites.
- En cas de doute copiez collez le fichier dans un outil IA style chatGPT et expliquez lui quels changements de texte vous voulez, il devrait être capable de vous guider dans les changement ou de vous donner le fichier en retour avec les modifications voulues à copier coller.

---

## 📞 Modifier les Informations de Contact

### Informations générales du site :
1. Ouvrez le fichier `_config.yml`
2. Cliquez sur l'icône crayon (✏️)
3. Modifiez les informations :
   - `title:` : Nom du site
   - `description:` : Description du site
   - `facebook_username:` : Nom d'utilisateur Facebook
   - `instagram_username:` : Nom d'utilisateur Instagram
   - `linkedin_username:` : Nom d'utilisateur LinkedIn

### Page de contact spécifique :
1. Ouvrez `pages/contact.md`
2. Modifiez les informations de contact dans le contenu de la page

---

## 🎠 Modifier le Carrousel de la Page d'Accueil

### Étape 1 : Modifier les données du carrousel
1. Ouvrez le fichier `_data/carousel_items.yml`
2. Cliquez sur l'icône crayon (✏️)

### Étape 2 : Ajouter ou modifier des éléments
Le fichier contient une liste d'éléments comme ceci :

```yaml
- image: "image_1.jpg"
  title: "Titre de la slide"
  description: "Description de la slide"
  
- image: "image_2.jpg"
  title: "Autre titre"
  description: "Autre description"
```

### Pour ajouter une nouvelle slide :
1. Ajoutez un nouvel élément à la fin de la liste
2. Assurez-vous que l'image existe dans `images/carousel/`
3. Respectez l'indentation (2 espaces)

---

## ⚠️ Conseils Importants

### ✅ Bonnes Pratiques :
- **Toujours prévisualiser** : Utilisez l'onglet "Preview" avant de sauvegarder
- **Messages de commit clairs** : Décrivez toujours ce que vous avez modifié
- **Sauvegarde régulière** : Faites des modifications petites et fréquentes
- **Vérification** : Attendez 2-3 minutes après une modification pour voir les changements sur le site

### ❌ À Éviter :
- Ne supprimez jamais de fichiers sans être sûr(e)
- Ne modifiez pas les fichiers dans `_layouts`, `_includes`, ou `_sass` sans aide technique
- N'utilisez pas d'espaces dans les noms de fichiers
- Ne téléchargez pas d'images trop lourdes (>2MB)

### 🆘 En Cas de Problème :
1. **Erreur de syntaxe** : Vérifiez que vous avez respecté le format exact des exemples
2. **Image qui ne s'affiche pas** : Vérifiez le nom du fichier et son emplacement
3. **Site qui ne se met pas à jour** : Attendez 5-10 minutes, GitHub peut prendre du temps
4. **Problème grave** : Contactez l'administrateur technique avec une description précise du problème

---

## 📞 Support

Pour toute question ou problème technique, contactez l'administrateur du site avec :
- Une description claire du problème
- Les étapes que vous avez suivies
- Discord: https://discord.gg/X6hrDsTr

---

*Ce guide a été créé pour faciliter la maintenance du site PAPS. Gardez-le à portée de main pour vos futures modifications !*