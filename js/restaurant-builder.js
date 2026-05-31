// Restaurant Scene Builder - Realistic & Detailed
function buildRestaurantScene(scene) {
    // Building structure
    buildStructure(scene);
    
    // Entrance area
    buildEntrance(scene);
    
    // Dining area with realistic furniture
    buildDiningArea(scene);
    
    // Bar area
    buildBarArea(scene);
    
    // Kitchen area
    buildKitchenArea(scene);
    
    // Decorations and plants
    buildDecorations(scene);
    
    // Details and accessories
    addDetails(scene);
}

function buildStructure(scene) {
    // Floor - high quality
    const floor = BABYLON.MeshBuilder.CreateGround('floor', { width: SCENE_WIDTH, height: SCENE_DEPTH }, scene);
    floor.material = materialLibrary.floor;
    floor.checkCollisions = true;
    
    // Walls - realistic dimensions
    const wallThickness = 0.15;
    
    // Back wall (entrance area)
    const backWall = BABYLON.MeshBuilder.CreateBox('backWall', {
        width: SCENE_WIDTH,
        height: SCENE_HEIGHT,
        depth: wallThickness
    }, scene);
    backWall.position.z = -SCENE_DEPTH / 2;
    backWall.material = materialLibrary.wall;
    backWall.checkCollisions = true;
    
    // Left wall
    const leftWall = BABYLON.MeshBuilder.CreateBox('leftWall', {
        width: wallThickness,
        height: SCENE_HEIGHT,
        depth: SCENE_DEPTH
    }, scene);
    leftWall.position.x = -SCENE_WIDTH / 2;
    leftWall.material = materialLibrary.wall;
    leftWall.checkCollisions = true;
    
    // Right wall
    const rightWall = BABYLON.MeshBuilder.CreateBox('rightWall', {
        width: wallThickness,
        height: SCENE_HEIGHT,
        depth: SCENE_DEPTH
    }, scene);
    rightWall.position.x = SCENE_WIDTH / 2;
    rightWall.material = materialLibrary.wall;
    rightWall.checkCollisions = true;
    
    // Ceiling
    const ceiling = BABYLON.MeshBuilder.CreateBox('ceiling', {
        width: SCENE_WIDTH,
        height: 0.2,
        depth: SCENE_DEPTH
    }, scene);
    ceiling.position.y = SCENE_HEIGHT - 0.1;
    ceiling.material = materialLibrary.wall;
    
    // Entrance opening (open wall)
    const frontWallLeft = BABYLON.MeshBuilder.CreateBox('frontWallLeft', {
        width: SCENE_WIDTH * 0.35,
        height: SCENE_HEIGHT,
        depth: wallThickness
    }, scene);
    frontWallLeft.position.set(-SCENE_WIDTH * 0.325, 0, SCENE_DEPTH / 2);
    frontWallLeft.material = materialLibrary.wall;
    
    const frontWallRight = BABYLON.MeshBuilder.CreateBox('frontWallRight', {
        width: SCENE_WIDTH * 0.35,
        height: SCENE_HEIGHT,
        depth: wallThickness
    }, scene);
    frontWallRight.position.set(SCENE_WIDTH * 0.325, 0, SCENE_DEPTH / 2);
    frontWallRight.material = materialLibrary.wall;
}

function buildEntrance(scene) {
    // Reception counter - wood PEFC certified
    const counterBody = BABYLON.MeshBuilder.CreateBox('counterBody', {
        width: 2.8,
        height: 1.1,
        depth: 0.9
    }, scene);
    counterBody.position.set(0, 0.55, 4.8);
    counterBody.material = materialLibrary.woodLight;
    
    // Counter top - black matte accent
    const counterTop = BABYLON.MeshBuilder.CreateBox('counterTop', {
        width: 2.8,
        height: 0.12,
        depth: 0.9
    }, scene);
    counterTop.position.set(0, 1.16, 4.8);
    counterTop.material = materialLibrary.blackMatte;
    
    // Counter front panel
    const counterFront = BABYLON.MeshBuilder.CreateBox('counterFront', {
        width: 2.8,
        height: 0.08,
        depth: 0.05
    }, scene);
    counterFront.position.set(0, 0.55, 5.3);
    counterFront.material = materialLibrary.sageGreen;
    
    // Welcome signage - biosourced materials
    const signboard = BABYLON.MeshBuilder.CreateBox('signboard', {
        width: 1.6,
        height: 0.7,
        depth: 0.08
    }, scene);
    signboard.position.set(0, 1.8, 4.8);
    signboard.material = materialLibrary.sageGreen;
}

function buildDiningArea(scene) {
    // Optimized seating configuration for 60 covers
    // 12 tables x 5 seats = 60 covers
    
    const tableConfigurations = [
        // Left section
        { pos: [-3.5, 0, 0.5], seatCount: 5 },
        { pos: [-3.5, 0, 2.5], seatCount: 5 },
        { pos: [-3.5, 0, 4], seatCount: 5 },
        
        // Left-center section
        { pos: [-1.5, 0, 0.5], seatCount: 5 },
        { pos: [-1.5, 0, 2.5], seatCount: 5 },
        { pos: [-1.5, 0, 4], seatCount: 5 },
        
        // Right-center section
        { pos: [1.5, 0, 0.5], seatCount: 5 },
        { pos: [1.5, 0, 2.5], seatCount: 5 },
        { pos: [1.5, 0, 4], seatCount: 5 },
        
        // Right section
        { pos: [3.5, 0, 0.5], seatCount: 5 },
        { pos: [3.5, 0, 2.5], seatCount: 5 },
        { pos: [3.5, 0, 4], seatCount: 5 }
    ];
    
    tableConfigurations.forEach((config, index) => {
        createRealisticDiningTable(scene, config.pos, config.seatCount, index);
    });
}

function createRealisticDiningTable(scene, position, seatCount, tableIndex) {
    // High-end dining table - round, wood PEFC
    const tableTop = BABYLON.MeshBuilder.CreateCylinder(
        `tableTop_${tableIndex}`,
        { diameter: 1.2, height: 0.08, tessellation: 64 },
        scene
    );
    tableTop.position = new BABYLON.Vector3(position[0], position[1] + 0.76, position[2]);
    tableTop.material = materialLibrary.woodLight;
    tableTop.receiveShadow = true;
    tableTop.castShadow = true;
    
    // Table base - sleek design
    const tableBase = BABYLON.MeshBuilder.CreateCylinder(
        `tableBase_${tableIndex}`,
        { diameter: 0.12, height: 0.68, tessellation: 32 },
        scene
    );
    tableBase.position = new BABYLON.Vector3(position[0], position[1] + 0.34, position[2]);
    tableBase.material = materialLibrary.woodDark;
    tableBase.castShadow = true;
    
    // Chairs around table - ergonomic design
    const chairAngles = [];
    for (let i = 0; i < seatCount; i++) {
        chairAngles.push((i / seatCount) * Math.PI * 2);
    }
    
    chairAngles.forEach((angle, seatIndex) => {
        const chairRadius = 0.75;
        const chairX = position[0] + Math.cos(angle) * chairRadius;
        const chairZ = position[2] + Math.sin(angle) * chairRadius;
        
        createRealisticChair(scene, [chairX, position[1], chairZ], `${tableIndex}_${seatIndex}`);
    });
}

function createRealisticChair(scene, position, id) {
    // Seat - cushioned look
    const seat = BABYLON.MeshBuilder.CreateBox(
        `seat_${id}`,
        { width: 0.5, height: 0.06, depth: 0.5 },
        scene
    );
    seat.position = new BABYLON.Vector3(position[0], position[1] + 0.04, position[2]);
    seat.material = materialLibrary.woodLight;
    seat.receiveShadow = true;
    seat.castShadow = true;
    
    // Backrest
    const backrest = BABYLON.MeshBuilder.CreateBox(
        `backrest_${id}`,
        { width: 0.5, height: 0.65, depth: 0.1 },
        scene
    );
    backrest.position = new BABYLON.Vector3(position[0], position[1] + 0.35, position[2] - 0.3);
    backrest.material = materialLibrary.woodLight;
    backrest.castShadow = true;
    
    // Four legs
    const legPositions = [
        [0.15, -0.2, 0.15],
        [-0.15, -0.2, 0.15],
        [0.15, -0.2, -0.15],
        [-0.15, -0.2, -0.15]
    ];
    
    legPositions.forEach((offset, i) => {
        const leg = BABYLON.MeshBuilder.CreateCylinder(
            `leg_${id}_${i}`,
            { diameter: 0.04, height: 0.4, tessellation: 16 },
            scene
        );
        leg.position = new BABYLON.Vector3(
            position[0] + offset[0],
            position[1] + offset[1],
            position[2] + offset[2]
        );
        leg.material = materialLibrary.blackMatte;
        leg.castShadow = true;
    });
}

function buildBarArea(scene) {
    // Bar counter - sage green accent
    const barCounter = BABYLON.MeshBuilder.CreateBox('barCounter', {
        width: 3.5,
        height: 1.15,
        depth: 0.7
    }, scene);
    barCounter.position.set(0, 0.58, -3.5);
    barCounter.material = materialLibrary.sageGreen;
    barCounter.castShadow = true;
    barCounter.receiveShadow = true;
    
    // Bar top - wood accent
    const barTop = BABYLON.MeshBuilder.CreateBox('barTop', {
        width: 3.5,
        height: 0.1,
        depth: 0.7
    }, scene);
    barTop.position.set(0, 1.18, -3.5);
    barTop.material = materialLibrary.woodLight;
    barTop.castShadow = true;
    
    // Bar shelves
    for (let i = 0; i < 3; i++) {
        const shelf = BABYLON.MeshBuilder.CreateBox(`shelf_${i}`, {
            width: 3.4,
            height: 0.08,
            depth: 0.6
        }, scene);
        shelf.position.set(0, 1.5 + i * 0.55, -3.5);
        shelf.material = materialLibrary.woodLight;
        shelf.castShadow = true;
        shelf.receiveShadow = true;
    }
}

function buildKitchenArea(scene) {
    // Kitchen counter
    const kitchenCounter = BABYLON.MeshBuilder.CreateBox('kitchenCounter', {
        width: 3,
        height: 0.95,
        depth: 2
    }, scene);
    kitchenCounter.position.set(0, 0.48, -5);
    kitchenCounter.material = materialLibrary.floor;
    kitchenCounter.opacity = 0.3;
}

function buildDecorations(scene) {
    // Strategic plant placements
    const plantPositions = [
        [-4.3, 0, -2.5],
        [4.3, 0, -2.5],
        [-4.3, 0, 3],
        [4.3, 0, 3],
        [0, 0, -5.2]
    ];
    
    plantPositions.forEach((pos, i) => {
        createRealisticPlant(scene, pos, i);
    });
}

function createRealisticPlant(scene, position, index) {
    // Ceramic pot
    const pot = BABYLON.MeshBuilder.CreateCylinder(
        `pot_${index}`,
        { diameter: 0.55, height: 0.45, tessellation: 32 },
        scene
    );
    pot.position = new BABYLON.Vector3(position[0], position[1] + 0.23, position[2]);
    pot.material = materialLibrary.ceramic;
    pot.receiveShadow = true;
    pot.castShadow = true;
    
    // Plant foliage
    const foliage = BABYLON.MeshBuilder.CreateSphere(
        `foliage_${index}`,
        { diameter: 0.8, segments: 24 },
        scene
    );
    foliage.position = new BABYLON.Vector3(position[0], position[1] + 0.9, position[2]);
    foliage.material = materialLibrary.plant;
    foliage.receiveShadow = true;
    foliage.castShadow = true;
    
    // Additional foliage variation
    const foliage2 = BABYLON.MeshBuilder.CreateSphere(
        `foliage2_${index}`,
        { diameter: 0.6, segments: 20 },
        scene
    );
    foliage2.position = new BABYLON.Vector3(position[0] + 0.2, position[1] + 1.1, position[2] + 0.2);
    foliage2.material = materialLibrary.plant;
    foliage2.receiveShadow = true;
    foliage2.castShadow = true;
}

function addDetails(scene) {
    // Napkins, menus, water glasses can be added here
    // For now, this is a placeholder for future enhancements
}
