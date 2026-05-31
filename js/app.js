// Main Application
class RestaurantVirtualTour {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.sceneBuilder = null;
        this.cameraControls = null;
        this.uiManager = null;
        this.animationId = null;
        
        this.init();
    }
    
    init() {
        // Scene Setup
        this.initScene();
        this.initCamera();
        this.initRenderer();
        this.initControls();
        this.buildScene();
        this.initUI();
        this.setupEventListeners();
        this.animate();
    }
    
    initScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xe8f0e8);
        this.scene.fog = new THREE.Fog(0xe8f0e8, 100, 200);
    }
    
    initCamera() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        );
        this.camera.position.set(0, 1.6, 15);
        this.camera.lookAt(0, 1.6, 0);
    }
    
    initRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFShadowShadowMap;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        document.getElementById('canvas-container').appendChild(this.renderer.domElement);
    }
    
    initControls() {
        this.cameraControls = new CameraControls(this.camera, this.renderer.domElement);
        this.cameraControls.setSpeed(0.5);
    }
    
    buildScene() {
        this.sceneBuilder = new SceneBuilder(this.scene);
        this.sceneBuilder.buildRestaurant();
    }
    
    initUI() {
        this.uiManager = new UIManager(this);
    }
    
    setupEventListeners() {
        window.addEventListener('resize', () => this.onWindowResize());
        document.getElementById('btn-info').addEventListener('click', () => this.uiManager.toggleInfo());
        document.getElementById('btn-fullscreen').addEventListener('click', () => this.toggleFullscreen());
        document.getElementById('btn-reset').addEventListener('click', () => this.resetView());
    }
    
    onWindowResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }
    
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
    
    resetView() {
        this.camera.position.set(0, 1.6, 15);
        this.camera.lookAt(0, 1.6, 0);
        this.cameraControls.reset();
    }
    
    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());
        this.cameraControls.update();
        this.renderer.render(this.scene, this.camera);
    }
    
    dispose() {
        cancelAnimationFrame(this.animationId);
        this.renderer.dispose();
    }
}

// Start Application
window.addEventListener('DOMContentLoaded', () => {
    new RestaurantVirtualTour();
});
