// Main Application Entry Point
window.addEventListener('DOMContentLoaded', async () => {
    console.log('🌿 Vert Resto - Initializing 3D Virtual Tour...');
    
    // Initialize Babylon Engine
    const { engine: eng, scene: scn } = initBabylonEngine();
    
    // Create camera
    createCamera();
    
    // Create materials
    updateLoadingProgress(15);
    createRealisticMaterials(scn);
    console.log('✓ Materials created');
    
    // Build restaurant
    updateLoadingProgress(30);
    buildRestaurantScene(scn);
    console.log('✓ Restaurant built');
    
    // Setup lighting
    updateLoadingProgress(60);
    setupAdvancedLighting(scn);
    console.log('✓ Lighting configured');
    
    // Add shadows to all mesh
    updateLoadingProgress(75);
    scn.meshes.forEach(mesh => {
        if (mesh.name !== 'floor') {
            shadowGenerator.addShadowCaster(mesh);
            mesh.receiveShadow = true;
        }
    });
    
    // Setup camera system
    updateLoadingProgress(85);
    setupCameraSystem(scn);
    console.log('✓ Camera system ready');
    
    // Setup interactions
    updateLoadingProgress(90);
    setupInteractions(scn);
    console.log('✓ Interactions enabled');
    
    // Start rendering
    updateLoadingProgress(100);
    startRenderLoop();
    
    // Hide loading screen
    setTimeout(() => {
        hideLoadingScreen();
        console.log('✓ Virtual tour ready!');
    }, 500);
    
    // Initial zone info
    updateZoneInfo('entrance');
    
    console.log('🌿 Vert Resto - Ready for exploration!'))
});
