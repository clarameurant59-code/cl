// Camera Controls - Orbital Camera with Mouse/Touch Support
class CameraControls {
    constructor(camera, domElement) {
        this.camera = camera;
        this.domElement = domElement;
        
        this.isMouseDown = false;
        this.isPanning = false;
        this.previousMousePosition = { x: 0, y: 0 };
        this.rotation = { x: 0, y: 0 };
        this.zoom = 15;
        this.speed = 0.5;
        this.minZoom = 5;
        this.maxZoom = 50;
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Mouse Events
        this.domElement.addEventListener('mousedown', (e) => this.onMouseDown(e));
        this.domElement.addEventListener('mousemove', (e) => this.onMouseMove(e));
        this.domElement.addEventListener('mouseup', (e) => this.onMouseUp(e));
        this.domElement.addEventListener('wheel', (e) => this.onMouseWheel(e), false);
        
        // Touch Events
        this.domElement.addEventListener('touchstart', (e) => this.onTouchStart(e));
        this.domElement.addEventListener('touchmove', (e) => this.onTouchMove(e));
        this.domElement.addEventListener('touchend', (e) => this.onTouchEnd(e));
        
        // Context Menu
        this.domElement.addEventListener('contextmenu', (e) => e.preventDefault());
    }
    
    onMouseDown(event) {
        this.isMouseDown = true;
        this.previousMousePosition = { x: event.clientX, y: event.clientY };
    }
    
    onMouseMove(event) {
        if (!this.isMouseDown) return;
        
        const deltaX = event.clientX - this.previousMousePosition.x;
        const deltaY = event.clientY - this.previousMousePosition.y;
        
        this.rotation.y += deltaX * 0.005 * this.speed;
        this.rotation.x += deltaY * 0.005 * this.speed;
        
        // Limit vertical rotation
        this.rotation.x = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, this.rotation.x));
        
        this.previousMousePosition = { x: event.clientX, y: event.clientY };
        this.updateCameraPosition();
    }
    
    onMouseUp(event) {
        this.isMouseDown = false;
    }
    
    onMouseWheel(event) {
        event.preventDefault();
        
        const zoomSpeed = 2;
        this.zoom += event.deltaY > 0 ? zoomSpeed : -zoomSpeed;
        this.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.zoom));
        this.updateCameraPosition();
    }
    
    onTouchStart(event) {
        if (event.touches.length === 1) {
            this.isMouseDown = true;
            this.previousMousePosition = {
                x: event.touches[0].clientX,
                y: event.touches[0].clientY
            };
        }
    }
    
    onTouchMove(event) {
        if (!this.isMouseDown || event.touches.length !== 1) return;
        
        const deltaX = event.touches[0].clientX - this.previousMousePosition.x;
        const deltaY = event.touches[0].clientY - this.previousMousePosition.y;
        
        this.rotation.y += deltaX * 0.005 * this.speed;
        this.rotation.x += deltaY * 0.005 * this.speed;
        
        this.rotation.x = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, this.rotation.x));
        
        this.previousMousePosition = {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY
        };
        this.updateCameraPosition();
    }
    
    onTouchEnd(event) {
        this.isMouseDown = false;
    }
    
    updateCameraPosition() {
        const x = Math.sin(this.rotation.y) * Math.cos(this.rotation.x) * this.zoom;
        const y = Math.sin(this.rotation.x) * this.zoom + 1.6;
        const z = Math.cos(this.rotation.y) * Math.cos(this.rotation.x) * this.zoom;
        
        this.camera.position.set(x, y, z);
        this.camera.lookAt(0, 1.6, 0);
    }
    
    setSpeed(speed) {
        this.speed = speed;
    }
    
    reset() {
        this.rotation = { x: 0, y: 0 };
        this.zoom = 15;
        this.updateCameraPosition();
    }
    
    update() {
        // Smooth updates if needed
    }
}
