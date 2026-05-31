// UI Manager - Handle Information Display
class UIManager {
    constructor(app) {
        this.app = app;
        this.infoVisible = true;
        this.zones = this.defineZones();
        this.setupRaycasting();
    }
    
    defineZones() {
        return {
            reception: {
                name: "Accueil",
                description: "Comptoir d'accueil compact et fonctionnel. Espace dédié à la réception des clients avec design élégant et matériaux recyclés."
            },
            dining: {
                name: "Salle à Manger",
                description: "Espace de 60 couverts optimisé. Tables et chaises en bois certifié PEFC, circulation fluide pour clients et personnel. Ambiance lumineuse et rassurante."
            },
            bar: {
                name: "Bar & Service",
                description: "Zone bar avec éclairage LED moderne. Accents en vert sauge et finitions noires mates. Espace dédié au service et aux boissons."
            },
            lighting: {
                name: "Éclairage",
                description: "Luminaires LED suspendus basse consommation. Capteurs automatiques de luminosité pour optimiser l'énergie. Éclairage chaleureux et fonctionnel."
            },
            decor: {
                name: "Décoration",
                description: "Plantes vertes discrètes, signalétique en matériaux biosourcés. Design durable reflétant les valeurs RSE de l'enseigne sans encombrement."
            }
        };
    }
    
    setupRaycasting() {
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        
        document.addEventListener('mousemove', (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            
            raycaster.setFromCamera(mouse, this.app.camera);
            
            // Check intersections with scene objects
            const intersects = raycaster.intersectObjects(this.app.scene.children, true);
            
            if (intersects.length > 0) {
                this.updateZoneInfo(intersects[0].object);
            }
        });
    }
    
    updateZoneInfo(object) {
        const description = document.getElementById('zone-description');
        
        // Determine which zone based on object position
        if (object.position.z > 2) {
            this.showZoneInfo('reception');
        } else if (object.position.y < 1) {
            this.showZoneInfo('dining');
        } else if (object.position.z < -2.5) {
            this.showZoneInfo('bar');
        } else if (object.position.y > 2) {
            this.showZoneInfo('lighting');
        } else {
            this.showZoneInfo('decor');
        }
    }
    
    showZoneInfo(zone) {
        const zoneData = this.zones[zone];
        const description = document.getElementById('zone-description');
        
        if (zoneData) {
            description.innerHTML = `<strong>${zoneData.name}</strong><br>${zoneData.description}`;
        }
    }
    
    toggleInfo() {
        const infoPanel = document.getElementById('info-panel');
        this.infoVisible = !this.infoVisible;
        infoPanel.style.opacity = this.infoVisible ? '1' : '0.3';
    }
}
