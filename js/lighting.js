// Lighting Setup - LED Low Consumption
function setupLighting(scene) {
    // Ambient light - soft base
    const ambientLight = new BABYLON.HemisphericLight('ambientLight', new BABYLON.Vector3(0, 1, 0.5), scene);
    ambientLight.intensity = 0.6;
    
    // Main directional light (natural-like)
    const sunLight = new BABYLON.PointLight('sunLight', new BABYLON.Vector3(5, 4, 5), scene);
    sunLight.intensity = 0.8;
    sunLight.range = 100;
    
    // Pendant lights above dining tables (LED)
    const tablePositions = [
        [-2.5, 2.5, -1],
        [-2.5, 2.5, 1.5],
        [-2.5, 2.5, 4],
        [-0.5, 2.5, -1],
        [-0.5, 2.5, 1.5],
        [-0.5, 2.5, 4],
        [0.5, 2.5, -1],
        [0.5, 2.5, 1.5],
        [0.5, 2.5, 4],
        [2.5, 2.5, -1],
        [2.5, 2.5, 1.5],
        [2.5, 2.5, 4]
    ];
    
    tablePositions.forEach((pos, i) => {
        const light = new BABYLON.PointLight('pendant_' + i, new BABYLON.Vector3(pos[0], pos[1], pos[2]), scene);
        light.intensity = 0.6;
        light.range = 8;
        light.diffuse = new BABYLON.Color3(1, 0.98, 0.9); // Warm white LED
        
        // Visual pendant fixture
        const pendant = BABYLON.MeshBuilder.CreateCylinder('pendant_' + i, { diameter: 0.25, height: 0.3 }, scene);
        pendant.position = new BABYLON.Vector3(pos[0], pos[1], pos[2]);
        pendant.material = materials.blackMatte;
    });
    
    // Bar accent lighting
    const barLight = new BABYLON.PointLight('barLight', new BABYLON.Vector3(0, 2, -4), scene);
    barLight.intensity = 0.7;
    barLight.range = 8;
    barLight.diffuse = new BABYLON.Color3(0.66, 0.78, 0.52); // Accent green
}
