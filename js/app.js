// Main Application - VERT RESTO Virtual Tour
window.addEventListener('DOMContentLoaded', () => {
    // Create scene
    const scene = createBabylonScene();
    
    // Create materials
    createMaterials(scene);
    
    // Build restaurant
    buildRestaurantScene(scene);
    
    // Setup lighting
    setupLighting(scene);
    
    // Setup interactions
    setupInteractions();
    
    // Start rendering
    startRenderLoop();
    
    // Hide loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading');
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1000);
    
    // Initial zone info
    updateZoneInfo('accueil');
});
