// Interactive Elements & Zone Info
const ZONES = {
    accueil: {
        title: '🔔 Accueil',
        description: 'Comptoir d\'accueil compact et fonctionnel',
        details: 'Espace d\'accueil moderne en bois certifié PEFC. Design épuré avec finitions noires mates pour une première impression premium.'
    },
    dining: {
        title: '🍽️ Salle à Manger',
        description: '60 couverts optimisés',
        details: 'Tables rondes en bois PEFC avec chaises ergonomiques. Circulation fluide permettant au personnel de servir efficacement. Ambiance lumineuse et rassurante.'
    },
    kitchen: {
        title: '👨‍🍳 Cuisine',
        description: 'Espace de préparation',
        details: 'Zone de cuisine fonctionnelle avec matériaux recyclés. Optimisation complète de l\'espace pour la préparation des plats.'
    },
    bar: {
        title: '🍷 Bar & Service',
        description: 'Zone de service et boissons',
        details: 'Comptoir bar en vert sauge avec accents de bois clair. Éclairage LED ambiant créant une ambiance conviviale.'
    },
    terrasse: {
        title: '🌿 Terrasse',
        description: 'Extension extérieure',
        details: 'Espace terrasse avec plantes vertes, renforçant l\'image durable de Vert Resto. Mobilier en matériaux écologiques.'
    }
};

function setupInteractions() {
    // Zone buttons
    const zoneButtons = document.querySelectorAll('.zone-btn');
    zoneButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const zone = e.target.dataset.zone;
            updateZoneInfo(zone);
            zoneButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
    
    // Control buttons
    document.getElementById('btn-fullscreen').addEventListener('click', () => {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
    });
    
    document.getElementById('btn-reset').addEventListener('click', () => {
        location.reload();
    });
}

function updateZoneInfo(zone) {
    const zoneData = ZONES[zone];
    if (zoneData) {
        document.getElementById('zone-title').textContent = zoneData.title;
        document.getElementById('zone-description').textContent = zoneData.description;
        document.getElementById('zone-details').textContent = zoneData.details;
    }
}
