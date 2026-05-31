// Scene Builder - VERT RESTO Restaurant 3D
function buildRestaurantScene(scene) {
    // Restaurant dimensions: ~10m x 6m optimized space
    const RESTAURANT_LENGTH = 10;
    const RESTAURANT_WIDTH = 6;
    const CEILING_HEIGHT = 3.2;
    
    // Floor
    const floorGeometry = BABYLON.MeshBuilder.CreateGround('floor', { width: RESTAURANT_WIDTH, height: RESTAURANT_LENGTH }, scene);
    floorGeometry.material = materials.floor;
    floorGeometry.checkCollisions = true;
    
    // Walls
    createWalls(scene, RESTAURANT_LENGTH, RESTAURANT_WIDTH, CEILING_HEIGHT);
    
    // Ceiling
    const ceilingGeometry = BABYLON.MeshBuilder.CreateGround('ceiling', { width: RESTAURANT_WIDTH, height: RESTAURANT_LENGTH }, scene);
    ceilingGeometry.position.y = CEILING_HEIGHT;
    ceilingGeometry.rotation.z = Math.PI;
    ceilingGeometry.material = materials.wall;
    
    // Reception Counter - Compact & Functional
    createReceptionCounter(scene);
    
    // Dining Area - 60 covers optimized
    createDiningArea(scene);
    
    // Bar & Service Area
    createBar(scene);
    
    // Plant Decorations
    createPlantDecorations(scene);
    
    // Accessories & Signage
    createAccessories(scene);
}

function createWalls(scene, length, width, height) {
    const wallThickness = 0.1;
    
    // Back wall (entrance area)
    const backWall = BABYLON.MeshBuilder.CreateBox('backWall', { width: width, height: height, depth: wallThickness }, scene);
    backWall.position.z = -length / 2;
    backWall.material = materials.wall;
    
    // Left wall
    const leftWall = BABYLON.MeshBuilder.CreateBox('leftWall', { width: wallThickness, height: height, depth: length }, scene);
    leftWall.position.x = -width / 2;
    leftWall.material = materials.wall;
    
    // Right wall
    const rightWall = BABYLON.MeshBuilder.CreateBox('rightWall', { width: wallThickness, height: height, depth: length }, scene);
    rightWall.position.x = width / 2;
    rightWall.material = materials.wall;
    
    // Front wall (partial - entrance opening)
    const frontWall = BABYLON.MeshBuilder.CreateBox('frontWall', { width: width * 0.6, height: height, depth: wallThickness }, scene);
    frontWall.position.set(-width * 0.2, 0, length / 2);
    frontWall.material = materials.wall;
}

function createReceptionCounter(scene) {
    // Counter structure
    const counterBody = BABYLON.MeshBuilder.CreateBox('counterBody', { width: 2.5, height: 1.1, depth: 0.8 }, scene);
    counterBody.position.set(0, 0.55, 4.5);
    counterBody.material = materials.woodLight;
    
    // Counter top (dark accent)
    const counterTop = BABYLON.MeshBuilder.CreateBox('counterTop', { width: 2.5, height: 0.08, depth: 0.8 }, scene);
    counterTop.position.set(0, 1.15, 4.5);
    counterTop.material = materials.blackMatte;
    
    // Informational signage
    const signboard = BABYLON.MeshBuilder.CreateBox('signboard', { width: 1.5, height: 0.6, depth: 0.05 }, scene);
    signboard.position.set(0, 1.7, 4.5);
    signboard.material = materials.sageGreen;
}

function createDiningArea(scene) {
    // 60 covers = ~4 sections of 15 covers each
    // Table configuration for optimal flow
    
    const tableConfigs = [
        // Section 1 - Left side
        { pos: [-2.5, 0, -1], seats: 6 },
        { pos: [-2.5, 0, 1.5], seats: 6 },
        { pos: [-2.5, 0, 4], seats: 6 },
        
        // Section 2 - Center-left
        { pos: [-0.5, 0, -1], seats: 6 },
        { pos: [-0.5, 0, 1.5], seats: 6 },
        { pos: [-0.5, 0, 4], seats: 6 },
        
        // Section 3 - Center-right
        { pos: [0.5, 0, -1], seats: 6 },
        { pos: [0.5, 0, 1.5], seats: 6 },
        { pos: [0.5, 0, 4], seats: 6 },
        
        // Section 4 - Right side
        { pos: [2.5, 0, -1], seats: 6 },
        { pos: [2.5, 0, 1.5], seats: 6 },
        { pos: [2.5, 0, 4], seats: 6 }
    ];
    
    tableConfigs.forEach((config, index) => {
        createDiningTable(scene, config.pos, config.seats, index);
    });
}

function createDiningTable(scene, position, seats, index) {
    // Circular table in wood PEFC
    const tableTop = BABYLON.MeshBuilder.CreateCylinder('tableTop_' + index, { diameter: 0.9, height: 0.05, tessellation: 32 }, scene);
    tableTop.position = new BABYLON.Vector3(position[0], position[1] + 0.75, position[2]);
    tableTop.material = materials.woodLight;
    
    // Table base
    const tableBase = BABYLON.MeshBuilder.CreateCylinder('tableBase_' + index, { diameter: 0.08, height: 0.7, tessellation: 16 }, scene);
    tableBase.position = new BABYLON.Vector3(position[0], position[1] + 0.35, position[2]);
    tableBase.material = materials.woodDark;
    
    // Chairs around table
    const chairPositions = [
        [0, 1.2, -0.5],
        [0.43, 1.2, -0.25],
        [0.43, 1.2, 0.25],
        [0, 1.2, 0.5],
        [-0.43, 1.2, 0.25],
        [-0.43, 1.2, -0.25]
    ];
    
    chairPositions.forEach((offset, i) => {
        createChair(scene, [
            position[0] + offset[0],
            position[1] + offset[1],
            position[2] + offset[2]
        ], index + '_' + i);
    });
}

function createChair(scene, position, id) {
    // Seat
    const seat = BABYLON.MeshBuilder.CreateBox('seat_' + id, { width: 0.45, height: 0.05, depth: 0.45 }, scene);
    seat.position = new BABYLON.Vector3(position[0], position[1], position[2]);
    seat.material = materials.woodLight;
    
    // Backrest
    const backrest = BABYLON.MeshBuilder.CreateBox('backrest_' + id, { width: 0.45, height: 0.5, depth: 0.08 }, scene);
    backrest.position = new BABYLON.Vector3(position[0], position[1] + 0.3, position[2] - 0.25);
    backrest.material = materials.woodLight;
    
    // Legs
    const legPositions = [[0.15, 0, 0.15], [-0.15, 0, 0.15], [0.15, 0, -0.15], [-0.15, 0, -0.15]];
    legPositions.forEach((offset, i) => {
        const leg = BABYLON.MeshBuilder.CreateCylinder('leg_' + id + '_' + i, { diameter: 0.04, height: 0.45 }, scene);
        leg.position = new BABYLON.Vector3(
            position[0] + offset[0],
            position[1] - 0.225,
            position[2] + offset[2]
        );
        leg.material = materials.blackMatte;
    });
}

function createBar(scene) {
    // Bar counter
    const barCounter = BABYLON.MeshBuilder.CreateBox('barCounter', { width: 3, height: 1, depth: 0.6 }, scene);
    barCounter.position.set(0, 0.5, -4);
    barCounter.material = materials.sageGreen;
    
    // Bar shelves
    for (let i = 0; i < 3; i++) {
        const shelf = BABYLON.MeshBuilder.CreateBox('shelf_' + i, { width: 3, height: 0.05, depth: 0.5 }, scene);
        shelf.position.set(0, 1.3 + i * 0.5, -4);
        shelf.material = materials.woodLight;
    }
}

function createPlantDecorations(scene) {
    // Strategic plant placements for RSE image
    const plantPositions = [
        [-4.5, 0, -2],
        [4.5, 0, -2],
        [-4.5, 0, 3],
        [4.5, 0, 3],
        [0, 0, -4.5]
    ];
    
    plantPositions.forEach((pos, i) => {
        createPlant(scene, pos, i);
    });
}

function createPlant(scene, position, index) {
    // Pot
    const pot = BABYLON.MeshBuilder.CreateCylinder('pot_' + index, { diameter: 0.5, height: 0.4, tessellation: 16 }, scene);
    pot.position = new BABYLON.Vector3(position[0], position[1] + 0.2, position[2]);
    pot.material = materials.ceramic;
    
    // Foliage (sphere)
    const foliage = BABYLON.MeshBuilder.CreateSphere('foliage_' + index, { diameter: 0.7, segments: 16 }, scene);
    foliage.position = new BABYLON.Vector3(position[0], position[1] + 0.8, position[2]);
    foliage.material = materials.plant;
}

function createAccessories(scene) {
    // Signage in biosourced materials
    // Placeholder for future detailed signage
}