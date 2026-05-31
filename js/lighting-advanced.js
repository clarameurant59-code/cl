// Advanced Lighting Setup
function setupAdvancedLighting(scene) {
    // Ambient light - soft warm glow
    const ambientLight = new BABYLON.HemisphericLight('ambientLight', 
        new BABYLON.Vector3(0.3, 1, 0.5), 
        scene
    );
    ambientLight.intensity = 0.5;
    ambientLight.diffuse = new BABYLON.Color3(1, 0.98, 0.95);
    
    // Main directional light
    const sunLight = new BABYLON.PointLight('sunLight', 
        new BABYLON.Vector3(2, 3, 3), 
        scene
    );
    sunLight.intensity = 0.85;
    sunLight.range = 150;
    sunLight.diffuse = new BABYLON.Color3(1, 0.99, 0.97);
    sunLight.specular = new BABYLON.Color3(1, 1, 1);
    
    // Shadow setup
    shadowGenerator = new BABYLON.ShadowGenerator(2048, sunLight);
    shadowGenerator.useBlurExponentialShadowMap = true;
    shadowGenerator.blurKernel = 64;
    
    // Pendant lights above dining tables - warm LED
    const tablePositions = [
        [-3.5, 2.6, 0.5],
        [-3.5, 2.6, 2.5],
        [-3.5, 2.6, 4],
        [-1.5, 2.6, 0.5],
        [-1.5, 2.6, 2.5],
        [-1.5, 2.6, 4],
        [1.5, 2.6, 0.5],
        [1.5, 2.6, 2.5],
        [1.5, 2.6, 4],
        [3.5, 2.6, 0.5],
        [3.5, 2.6, 2.5],
        [3.5, 2.6, 4]
    ];
    
    tablePositions.forEach((pos, i) => {
        const pendantLight = new BABYLON.PointLight(`pendant_${i}`, 
            new BABYLON.Vector3(pos[0], pos[1], pos[2]), 
            scene
        );
        pendantLight.intensity = 0.65;
        pendantLight.range = 9;
        pendantLight.diffuse = new BABYLON.Color3(1, 0.95, 0.85); // Warm white
        
        // Pendant fixture
        const pendant = BABYLON.MeshBuilder.CreateCylinder(
            `pendant_${i}`,
            { diameter: 0.28, height: 0.35, tessellation: 32 },
            scene
        );
        pendant.position = new BABYLON.Vector3(pos[0], pos[1], pos[2]);
        pendant.material = materialLibrary.blackMatte;
        pendant.castShadow = true;
        
        // Add pendant to shadow map
        shadowGenerator.addShadowCaster(pendant);
    });
    
    // Bar accent lighting
    const barLight = new BABYLON.PointLight('barLight', 
        new BABYLON.Vector3(0, 2.2, -3.5), 
        scene
    );
    barLight.intensity = 0.6;
    barLight.range = 10;
    barLight.diffuse = new BABYLON.Color3.FromHexString('#a8c686');
    
    // Entrance accent
    const entranceLight = new BABYLON.PointLight('entranceLight',
        new BABYLON.Vector3(0, 2.5, 4.8),
        scene
    );
    entranceLight.intensity = 0.55;
    entranceLight.range = 8;
    entranceLight.diffuse = new BABYLON.Color3(1, 0.97, 0.9);
}
