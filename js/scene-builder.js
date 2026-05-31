// Scene Builder - Restaurant 3D Construction
class SceneBuilder {
    constructor(scene) {
        this.scene = scene;
        this.materials = this.createMaterials();
    }
    
    createMaterials() {
        return {
            // Walls & Floor
            wall: new THREE.MeshStandardMaterial({
                color: 0xf5f1e8,
                roughness: 0.8,
                metalness: 0
            }),
            floor: new THREE.MeshStandardMaterial({
                color: 0xe8dcc8,
                roughness: 0.6,
                metalness: 0.1
            }),
            ceiling: new THREE.MeshStandardMaterial({
                color: 0xf0ede6,
                roughness: 0.7,
                metalness: 0
            }),
            
            // Wood
            woodLight: new THREE.MeshStandardMaterial({
                color: 0xd4a574,
                roughness: 0.6,
                metalness: 0.1
            }),
            
            // Accents
            sageGreen: new THREE.MeshStandardMaterial({
                color: 0x9ba982,
                roughness: 0.7,
                metalness: 0
            }),
            blackMatte: new THREE.MeshStandardMaterial({
                color: 0x2a2a2a,
                roughness: 0.9,
                metalness: 0
            }),
            
            // Glass
            glass: new THREE.MeshStandardMaterial({
                color: 0xffffff,
                roughness: 0.1,
                metalness: 0.9,
                transparent: true,
                opacity: 0.7
            })
        };
    }
    
    buildRestaurant() {
        this.buildStructure();
        this.buildFurniture();
        this.buildLighting();
        this.buildDecoration();
    }
    
    buildStructure() {
        // Floor (60m² ≈ 10m x 6m)
        const floorGeom = new THREE.PlaneGeometry(10, 6);
        const floor = new THREE.Mesh(floorGeom, this.materials.floor);
        floor.rotation.x = -Math.PI / 2;
        floor.receiveShadow = true;
        this.scene.add(floor);
        
        // Walls
        const wallThickness = 0.1;
        
        // Back wall
        const backWall = new THREE.Mesh(
            new THREE.BoxGeometry(10, 3, wallThickness),
            this.materials.wall
        );
        backWall.position.z = -3;
        backWall.castShadow = true;
        backWall.receiveShadow = true;
        this.scene.add(backWall);
        
        // Left wall
        const leftWall = new THREE.Mesh(
            new THREE.BoxGeometry(wallThickness, 3, 6),
            this.materials.wall
        );
        leftWall.position.x = -5;
        leftWall.castShadow = true;
        leftWall.receiveShadow = true;
        this.scene.add(leftWall);
        
        // Right wall
        const rightWall = new THREE.Mesh(
            new THREE.BoxGeometry(wallThickness, 3, 6),
            this.materials.wall
        );
        rightWall.position.x = 5;
        rightWall.castShadow = true;
        rightWall.receiveShadow = true;
        this.scene.add(rightWall);
        
        // Ceiling
        const ceiling = new THREE.Mesh(
            new THREE.PlaneGeometry(10, 6),
            this.materials.ceiling
        );
        ceiling.position.y = 3;
        ceiling.rotation.x = Math.PI / 2;
        ceiling.receiveShadow = true;
        this.scene.add(ceiling);
    }
    
    buildFurniture() {
        // Reception Counter (near entrance)
        this.createReceptionCounter();
        
        // Dining Tables (4 tables for ~15 people each)
        this.createDiningTables();
        
        // Bar/Service Area
        this.createBar();
    }
    
    createReceptionCounter() {
        // Counter frame
        const counterGeom = new THREE.BoxGeometry(2.5, 1.1, 0.8);
        const counter = new THREE.Mesh(counterGeom, this.materials.woodLight);
        counter.position.set(0, 0.55, 2.5);
        counter.castShadow = true;
        counter.receiveShadow = true;
        this.scene.add(counter);
        
        // Counter top (accent)
        const topGeom = new THREE.BoxGeometry(2.5, 0.08, 0.8);
        const top = new THREE.Mesh(topGeom, this.materials.blackMatte);
        top.position.set(0, 1.15, 2.5);
        top.castShadow = true;
        this.scene.add(top);
    }
    
    createDiningTables() {
        const tablePositions = [
            [-3, 0, -0.5],
            [3, 0, -0.5],
            [-3, 0, -2],
            [3, 0, -2]
        ];
        
        tablePositions.forEach((pos, index) => {
            this.createTable(pos);
        });
    }
    
    createTable(position) {
        // Table top
        const tableTopGeom = new THREE.CylinderGeometry(0.75, 0.75, 0.05, 32);
        const tableTop = new THREE.Mesh(tableTopGeom, this.materials.woodLight);
        tableTop.position.set(position[0], position[1] + 0.75, position[2]);
        tableTop.castShadow = true;
        tableTop.receiveShadow = true;
        this.scene.add(tableTop);
        
        // Table legs (4)
        const legGeom = new THREE.CylinderGeometry(0.05, 0.05, 0.7, 16);
        const legPositions = [
            [-0.5, -0.35, -0.5],
            [0.5, -0.35, -0.5],
            [-0.5, -0.35, 0.5],
            [0.5, -0.35, 0.5]
        ];
        
        legPositions.forEach(legPos => {
            const leg = new THREE.Mesh(legGeom, this.materials.woodLight);
            leg.position.set(
                position[0] + legPos[0],
                position[1] + legPos[1],
                position[2] + legPos[2]
            );
            leg.castShadow = true;
            leg.receiveShadow = true;
            this.scene.add(leg);
        });
        
        // Chairs (4 around table)
        this.createChairs(position);
    }
    
    createChairs(tablePos) {
        const chairPositions = [
            [0, 1.3, -0.3],
            [0, 1.3, 0.3],
            [-0.3, 1.3, 0],
            [0.3, 1.3, 0]
        ];
        
        chairPositions.forEach(offset => {
            this.createChair([
                tablePos[0] + offset[0],
                tablePos[1] + offset[1],
                tablePos[2] + offset[2]
            ]);
        });
    }
    
    createChair(position) {
        // Seat
        const seatGeom = new THREE.BoxGeometry(0.45, 0.05, 0.45);
        const seat = new THREE.Mesh(seatGeom, this.materials.woodLight);
        seat.position.set(position[0], position[1], position[2]);
        seat.castShadow = true;
        seat.receiveShadow = true;
        this.scene.add(seat);
        
        // Backrest
        const backGeom = new THREE.BoxGeometry(0.45, 0.6, 0.08);
        const back = new THREE.Mesh(backGeom, this.materials.woodLight);
        back.position.set(position[0], position[1] + 0.35, position[2] - 0.25);
        back.castShadow = true;
        this.scene.add(back);
        
        // Legs (2 simple legs)
        const legGeom = new THREE.CylinderGeometry(0.03, 0.03, 0.45, 8);
        [-0.15, 0.15].forEach(offset => {
            const leg = new THREE.Mesh(legGeom, this.materials.blackMatte);
            leg.position.set(position[0] + offset, position[1] - 0.225, position[2] + 0.15);
            leg.castShadow = true;
            this.scene.add(leg);
        });
    }
    
    createBar() {
        // Bar counter
        const barGeom = new THREE.BoxGeometry(3, 1, 0.6);
        const bar = new THREE.Mesh(barGeom, this.materials.sageGreen);
        bar.position.set(0, 0.5, -2.8);
        bar.castShadow = true;
        bar.receiveShadow = true;
        this.scene.add(bar);
        
        // Bar shelves
        for (let i = 0; i < 3; i++) {
            const shelfGeom = new THREE.BoxGeometry(3, 0.05, 0.5);
            const shelf = new THREE.Mesh(shelfGeom, this.materials.woodLight);
            shelf.position.set(0, 1.3 + i * 0.5, -2.8);
            shelf.castShadow = true;
            this.scene.add(shelf);
        }
    }
    
    buildLighting() {
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);
        
        // Main directional light (sun-like)
        const sunLight = new THREE.DirectionalLight(0xffffff, 0.8);
        sunLight.position.set(5, 5, 5);
        sunLight.castShadow = true;
        sunLight.shadow.mapSize.width = 2048;
        sunLight.shadow.mapSize.height = 2048;
        sunLight.shadow.camera.far = 50;
        sunLight.shadow.camera.left = -10;
        sunLight.shadow.camera.right = 10;
        sunLight.shadow.camera.top = 10;
        sunLight.shadow.camera.bottom = -10;
        this.scene.add(sunLight);
        
        // Pendant lights above tables
        const pendantPositions = [
            [-3, 2.5, -0.5],
            [3, 2.5, -0.5],
            [-3, 2.5, -2],
            [3, 2.5, -2]
        ];
        
        pendantPositions.forEach(pos => {
            const light = new THREE.PointLight(0xfdb462, 0.7, 8);
            light.position.set(pos[0], pos[1], pos[2]);
            light.castShadow = true;
            this.scene.add(light);
            
            // Visual pendant
            const pendantGeom = new THREE.CylinderGeometry(0.2, 0.2, 0.3, 16);
            const pendant = new THREE.Mesh(pendantGeom, this.materials.blackMatte);
            pendant.position.set(pos[0], pos[1], pos[2]);
            this.scene.add(pendant);
        });
        
        // Bar accent light
        const barLight = new THREE.PointLight(0xa8c686, 0.6, 6);
        barLight.position.set(0, 2, -2.8);
        barLight.castShadow = true;
        this.scene.add(barLight);
    }
    
    buildDecoration() {
        // Plants
        this.createPlants();
        
        // Signage
        this.createSignage();
    }
    
    createPlants() {
        const plantPositions = [
            [-4.5, 0, -2.5],
            [4.5, 0, -2.5],
            [-4.5, 0, 2],
            [4.5, 0, 2]
        ];
        
        plantPositions.forEach(pos => {
            // Pot
            const potGeom = new THREE.CylinderGeometry(0.25, 0.3, 0.4, 16);
            const pot = new THREE.Mesh(potGeom, new THREE.MeshStandardMaterial({
                color: 0xb5a69c,
                roughness: 0.7
            }));
            pot.position.set(pos[0], pos[1] + 0.2, pos[2]);
            pot.castShadow = true;
            this.scene.add(pot);
            
            // Plant leaves (simple sphere for foliage)
            const foliageGeom = new THREE.SphereGeometry(0.35, 8, 8);
            const foliage = new THREE.Mesh(foliageGeom, this.materials.sageGreen);
            foliage.position.set(pos[0], pos[1] + 0.8, pos[2]);
            foliage.castShadow = true;
            this.scene.add(foliage);
        });
    }
    
    createSignage() {
        // Simple welcome sign on counter
        const signGeom = new THREE.BoxGeometry(1.5, 0.6, 0.05);
        const sign = new THREE.Mesh(signGeom, new THREE.MeshStandardMaterial({
            color: 0x2a2a2a,
            roughness: 0.5
        }));
        sign.position.set(0, 1.7, 2.5);
        sign.castShadow = true;
        this.scene.add(sign);
    }
}
