# 🏢 Visite Virtuelle 3D - Restaurant Éco-Responsable

## Vue d'ensemble

Visite interactive 3D en temps réel d'un restaurant éco-responsable moderne situé en centre-ville à Nantes, d'une capacité de 60 couverts.

### ✨ Caractéristiques

- **Rendu 3D haute performance** avec Three.js
- **Navigation intuitive** avec contrôles à la souris et tactiles
- **Ambiance authentique** : mobilier en bois PEFC, matériaux recyclés, éclairage LED
- **Design durable** : palette naturelle (bois clair, beige, vert sauge, noir mat)
- **Zone interactive** : affichage d'informations lors du survol
- **Interface responsive** : adaptation mobile/desktop

---

## 📋 Contenu de la visite

### Zones principales

1. **Accueil** 🎯
   - Comptoir compact et fonctionnel
   - Design élégant
   - Premier point de contact client

2. **Salle à Manger** 🍽️
   - 60 couverts optimisés
   - Tables rondes en bois certifié PEFC
   - Circulation fluide
   - Ambiance lumineuse

3. **Bar & Service** 🍷
   - Espace dédié au bar
   - Accents en vert sauge
   - Éclairage chaleureux

4. **Éclairage** 💡
   - Luminaires LED suspendus
   - Capteurs automatiques de luminosité
   - Basse consommation énergétique

5. **Décoration** 🌱
   - Plantes vertes discrètes
   - Signalétique écologique
   - Matériaux biosourcés

---

## 🚀 Installation & Démarrage

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Aucune dépendance externe requise (Three.js chargé via CDN)

### Installation locale

```bash
# 1. Cloner le repository
git clone https://github.com/clarameurant59-code/cl.git
cd cl

# 2. Lancer un serveur local
python -m http.server 8000
# ou
npx http-server

# 3. Ouvrir dans le navigateur
# http://localhost:8000
```

---

## 🎮 Contrôles

### Souris
- **Clic + Déplacement** : Faire tourner la caméra autour du restaurant
- **Scroll** : Zoomer avant/arrière
- **Hover** : Afficher les informations de zone

### Tactile (Mobile)
- **Glisser** : Faire tourner la caméra
- **Pincer** : Zoomer (sur mobile avancé)

### Boutons d'interface
- **ℹ️** : Basculer le panneau d'information
- **⛶** : Passer en plein écran
- **🔄** : Réinitialiser la vue

---

## 🏗️ Architecture du projet

```
cl/
├── index.html              # Page principale
├── styles.css              # Styles et design responsive
├── js/
│   ├── app.js             # Application principale
│   ├── camera-controls.js # Contrôles de caméra
│   ├── scene-builder.js   # Construction de la scène 3D
│   └── ui-manager.js      # Gestion de l'interface
└── README.md
```

### Modules

#### **app.js**
- Initialisation de la scène Three.js
- Gestion du renderer WebGL
- Gestion des événements (redimensionnement, fullscreen)
- Boucle d'animation

#### **camera-controls.js**
- Contrôles de caméra orbitale
- Support souris et tactile
- Zoom avec scroll
- Limitation des angles de rotation

#### **scene-builder.js**
- Construction de la géométrie du restaurant
- Matériaux (bois, verre, béton, etc.)
- Meubles (tables, chaises, bar)
- Éclairage (ambient, directional, point lights)
- Plantes et décoration

#### **ui-manager.js**
- Gestion des zones interactives
- Affichage des informations contextuelles
- Raycasting pour la détection de zones

---

## 🎨 Design & Palette

### Couleurs
- **Bois clair** : #d4a574
- **Beige/Crème** : #f5f1e8
- **Vert sauge** : #9ba982
- **Noir mat** : #2a2a2a
- **Fond naturel** : #e8f0e8

### Matériaux
- Bois certifié PEFC
- Matériaux recyclés
- Finitions naturelles
- Textiles écologiques

---

## ⚙️ Technologies

- **Three.js** : Moteur 3D WebGL
- **HTML5** : Structure
- **CSS3** : Styling et animations
- **JavaScript ES6+** : Logique fonctionnelle
- **WebGL** : Rendu graphique haute performance

---

## 🌍 Optimisations

### Performance
- ✅ Ombres dynamiques optimisées (PCF)
- ✅ Pixel ratio adapté à l'écran
- ✅ LOD (Level of Detail) implicite
- ✅ Préférence haute performance pour le navigateur

### Accessibilité
- ✅ Navigation au clavier supportée
- ✅ Contrôles tactiles intuitifs
- ✅ Responsive design
- ✅ Interface claire et contrastée

---

## 📱 Compatibilité

| Navigateur | Desktop | Mobile |
|-----------|---------|--------|
| Chrome    | ✅      | ✅     |
| Firefox   | ✅      | ✅     |
| Safari    | ✅      | ✅     |
| Edge      | ✅      | ✅     |

---

## 🚀 Déploiement

### GitHub Pages
```bash
git checkout gh-pages
# ou créer une branche gh-pages

# Le site sera accessible sur :
# https://clarameurant59-code.github.io/cl/
```

### Vercel/Netlify
```bash
npm install -g vercel
vercel deploy
```

---

## 🛠️ Améliorations futures

- [ ] Menu interactif
- [ ] Réservation en ligne
- [ ] Mode VR (WebXR)
- [ ] Audio ambiant
- [ ] Animations dynamiques (personnel, mouvements)
- [ ] Modèles 3D plus détaillés
- [ ] Galerie de photos intégrée
- [ ] Multilinguisme (FR/EN/DE)

---

## 📝 Licence

MIT License - Libre d'utilisation

---

## 👤 Auteur

Créé par **Clara Meurant** - Restaurant Éco-Responsable Nantes

---

## 💬 Feedback & Support

Pour toute question ou suggestion :
- 📧 Email : contact@restaurant-ecoresponsable.fr
- 🐛 Issues : GitHub Issues
- 📲 Social : Instagram @restaurant_eco_nantes

---

**Profitez de votre visite ! 🌱✨**
