// Babylon.js Configuration
let engine;
let scene;
let camera;

function createBabylonScene() {
    const canvas = document.getElementById('renderCanvas');
    engine = new BABYLON.Engine(canvas, true, {
        preserveDrawingBuffer: true,
        stencil: true,
        antialias: true,
        powerPreference: 'high-performance'
    });
    
    scene = new BABYLON.Scene(engine);
    scene.collisionsEnabled = true;
    
    // Environment
    scene.clearColor = new BABYLON.Color3(0.93, 0.93, 0.91);
    scene.fogEnabled = true;
    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
    scene.fogDensity = 0.005;
    scene.fogColor = new BABYLON.Color3(0.93, 0.93, 0.91);
    
    // Camera Setup
    camera = new BABYLON.UniversalCamera('camera', new BABYLON.Vector3(0, 1.7, 15));
    camera.attachControl(canvas, true);
    camera.inertia = 0.7;
    camera.angularSensibility = 1000;
    camera.speed = 0;
    camera.attachControl(canvas, true);
    camera.keysUp = [];
    camera.keysDown = [];
    camera.keysLeft = [];
    camera.keysRight = [];
    
    // Mouse Controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let cameraRotation = { x: 0, y: 0 };
    let cameraDistance = 15;
    
    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });
    
    canvas.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        
        cameraRotation.y -= deltaX * 0.01;
        cameraRotation.x -= deltaY * 0.01;
        cameraRotation.x = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, cameraRotation.x));
        
        previousMousePosition = { x: e.clientX, y: e.clientY };
        updateCameraPosition();
    });
    
    canvas.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        cameraDistance += e.deltaY > 0 ? 1 : -1;
        cameraDistance = Math.max(5, Math.min(40, cameraDistance));
        updateCameraPosition();
    });
    
    function updateCameraPosition() {
        const x = Math.sin(cameraRotation.y) * Math.cos(cameraRotation.x) * cameraDistance;
        const y = Math.sin(cameraRotation.x) * cameraDistance + 1.7;
        const z = Math.cos(cameraRotation.y) * Math.cos(cameraRotation.x) * cameraDistance;
        
        camera.position = new BABYLON.Vector3(x, y, z);
        camera.setTarget(new BABYLON.Vector3(0, 1.7, 0));
    }
    
    window.addEventListener('resize', () => {
        engine.resize();
    });
    
    return scene;
}

function startRenderLoop() {
    engine.runRenderLoop(() => {
        scene.render();
    });
}