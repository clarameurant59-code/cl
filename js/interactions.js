// User Interactions
function setupInteractions(scene) {
    const canvas = document.getElementById('renderCanvas');
    
    // Navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const camera = e.target.dataset.camera;
            setCamera(camera);
            
            // Update active button
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Update info
            updateZoneInfo(camera);
        });
    });
    
    // Fullscreen button
    document.getElementById('btn-fullscreen').addEventListener('click', () => {
        if (!document.fullscreenElement) {
            canvas.requestFullscreen().catch(err => console.log(err));
        } else {
            document.exitFullscreen();
        }
    });
    
    // Reset button
    document.getElementById('btn-reset').addEventListener('click', () => {
        location.reload();
    });
    
    // 360 view button
    document.getElementById('btn-360').addEventListener('click', () => {
        start360Rotation();
    });
    
    // Info toggle
    document.getElementById('btn-info').addEventListener('click', () => {
        const panel = document.querySelector('.info-panel');
        panel.style.opacity = panel.style.opacity === '0.3' ? '1' : '0.3';
    });
}

const ZONE_INFO = {
    entrance: {
        title: '🔔 Accueil',
        description: 'Comptoir d\'accueil compact et fonctionnel',
        details: 'Première impression premium en bois certifié PEFC avec accents en noir mat. Design épuré pour créer une ambiance d\'accueil chaleureuse et professionnelle.'
    },
    dining: {
        title: '🍽️ Salle à Manger',
        description: '60 couverts optimisés',
        details: 'Tables rondes en bois PEFC avec chaises ergonomiques. Circulation fluide permettant au personnel de servir efficacement. Ambiance lumineuse créée par les luminaires LED suspendus au-dessus de chaque table.'
    },
    bar: {
        title: '🍷 Bar & Service',
        description: 'Zone de service et boissons',
        details: 'Comptoir en vert sauge avec accents de bois clair. Éclairage LED ambiant créant une ambiance conviviale. Espace de travail optimisé pour la préparation et le service des boissons.'
    },
    kitchen: {
        title: '👨‍🍳 Cuisine',
        description: 'Espace de préparation',
        details: 'Zone de cuisine fonctionnelle avec matériaux recyclés et finitions naturelles. Optimisation complète de l\'espace pour la préparation des plats dans le respect des valeurs RSE.'
    },
    overview: {
        title: '🏢 Vue Globale',
        description: 'Perspective d\'ensemble du restaurant',
        details: 'Vue d\'ensemble du restaurant de 10m x 6m. Optimisation spatiale complète avec 60 couverts, accueil, bar et cuisine. Ambiance contemporaine, élégante et lumineuse reflet des valeurs écologiques.'
    }
};

function updateZoneInfo(zone) {
    const info = ZONE_INFO[zone];
    if (!info) return;
    
    document.getElementById('zone-title').textContent = info.title;
    document.getElementById('zone-description').textContent = info.description;
    
    const detailsElement = document.querySelector('.zone-info p');
    if (detailsElement) {
        detailsElement.textContent = info.details;
    }
}

let isRotating = false;

function start360Rotation() {
    if (isRotating) return;
    isRotating = true;
    
    const startTime = Date.now();
    const duration = 10000; // 10 seconds
    const startPosition = camera.position.clone();
    
    const rotate = () => {
        const elapsed = (Date.now() - startTime) % duration;
        const angle = (elapsed / duration) * Math.PI * 2;
        
        const radius = Math.sqrt(startPosition.x ** 2 + startPosition.z ** 2);
        camera.position.x = Math.cos(angle) * radius;
        camera.position.z = Math.sin(angle) * radius;
        camera.setTarget(new BABYLON.Vector3(0, 1.2, 0));
        
        if (isRotating) {
            requestAnimationFrame(rotate);
        }
    };
    
    rotate();
    
    // Stop on click
    document.addEventListener('click', stopRotation, { once: true });
}

function stopRotation() {
    isRotating = false;
}
