// Camera System with Multiple Viewpoints
const CAMERA_POSITIONS = {
    entrance: {
        name: 'Entrée',
        position: new BABYLON.Vector3(0, 1.8, 6),
        target: new BABYLON.Vector3(0, 1.6, 2)
    },
    dining: {
        name: 'Salle à Manger',
        position: new BABYLON.Vector3(0, 1.8, 3),
        target: new BABYLON.Vector3(0, 0.8, 0)
    },
    bar: {
        name: 'Bar',
        position: new BABYLON.Vector3(-2, 1.8, -2),
        target: new BABYLON.Vector3(0, 0.8, -3.5)
    },
    kitchen: {
        name: 'Cuisine',
        position: new BABYLON.Vector3(1, 1.8, -4),
        target: new BABYLON.Vector3(0, 0.8, -5)
    },
    overview: {
        name: 'Vue Globale',
        position: new BABYLON.Vector3(6, 2.8, 0),
        target: new BABYLON.Vector3(0, 1.2, 0)
    }
};

function setupCameraSystem(scene) {
    // Initialize with entrance view
    setCamera('entrance');
}

function setCamera(position) {
    const camData = CAMERA_POSITIONS[position];
    if (!camData) return;
    
    // Smooth animation to new position
    const startPos = camera.position.clone();
    const startTarget = camera.target.clone();
    const duration = 1.2; // seconds
    const startTime = Date.now();
    
    const animateCamera = () => {
        const elapsed = (Date.now() - startTime) / 1000;
        const t = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeT = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        
        camera.position = BABYLON.Vector3.Lerp(startPos, camData.position, easeT);
        camera.setTarget(BABYLON.Vector3.Lerp(startTarget, camData.target, easeT));
        
        if (t < 1) {
            requestAnimationFrame(animateCamera);
        }
    };
    
    animateCamera();
}
