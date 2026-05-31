// Babylon Engine Setup
let engine, scene, camera;
let shadowGenerator;
const SCENE_WIDTH = 10;
const SCENE_HEIGHT = 3.2;
const SCENE_DEPTH = 6;

function initBabylonEngine() {
    const canvas = document.getElementById('renderCanvas');
    engine = new BABYLON.Engine(canvas, true, {
        preserveDrawingBuffer: true,
        stencil: true,
        antialias: true,
        premultipliedAlpha: false,
        powerPreference: 'high-performance'
    });
    
    scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3.FromHexString('#e8f0e8');
    scene.collisionsEnabled = true;
    
    // Enable post-processing
    const postProcess = new BABYLON.GrainPostProcess('grain', 1.0, camera);
    
    // Handle window resize
    window.addEventListener('resize', () => {
        engine.resize();
    });
    
    return { engine, scene, camera };
}

function createCamera() {
    camera = new BABYLON.UniversalCamera('mainCamera', new BABYLON.Vector3(0, 1.7, 8));
    camera.attachControl(document.getElementById('renderCanvas'), true);
    camera.inertia = 0.7;
    camera.angularSensibility = 1000;
    camera.attachControl(document.getElementById('renderCanvas'), true);
    
    // Disable default keyboard controls
    camera.keysUp = [];
    camera.keysDown = [];
    camera.keysLeft = [];
    camera.keysRight = [];
    
    camera.minZ = 0.1;
    camera.maxZ = 1000;
    
    return camera;
}

function startRenderLoop() {
    let lastFrameTime = Date.now();
    
    engine.runRenderLoop(() => {
        const currentTime = Date.now();
        const deltaTime = (currentTime - lastFrameTime) / 1000;
        lastFrameTime = currentTime;
        
        // Update animations
        updateAnimations(deltaTime);
        
        // Render scene
        scene.render();
    });
}

function updateAnimations(deltaTime) {
    // Placeholder for animation updates
}
