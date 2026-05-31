// Material Library - VERT RESTO
let materials = {};

function createMaterials(scene) {
    // Wood - Certifié PEFC
    materials.woodLight = new BABYLON.StandardMaterial('woodLight', scene);
    materials.woodLight.diffuse = new BABYLON.Color3(0.83, 0.65, 0.45); // #d4a574
    materials.woodLight.specularColor = new BABYLON.Color3(0.2, 0.2, 0.2);
    materials.woodLight.specularPower = 32;
    
    materials.woodDark = new BABYLON.StandardMaterial('woodDark', scene);
    materials.woodDark.diffuse = new BABYLON.Color3(0.55, 0.44, 0.28); // #8b6f47
    materials.woodDark.specularColor = new BABYLON.Color3(0.15, 0.15, 0.15);
    materials.woodDark.specularPower = 24;
    
    // Walls & Surfaces
    materials.wall = new BABYLON.StandardMaterial('wall', scene);
    materials.wall.diffuse = new BABYLON.Color3(0.96, 0.94, 0.91); // #f5f1e8
    materials.wall.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);
    
    materials.floor = new BABYLON.StandardMaterial('floor', scene);
    materials.floor.diffuse = new BABYLON.Color3(0.91, 0.86, 0.78); // #e8dcc8
    materials.floor.specularColor = new BABYLON.Color3(0.15, 0.15, 0.15);
    
    // Colors
    materials.sageGreen = new BABYLON.StandardMaterial('sageGreen', scene);
    materials.sageGreen.diffuse = new BABYLON.Color3(0.61, 0.66, 0.51); // #9ba982
    materials.sageGreen.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);
    
    materials.accentGreen = new BABYLON.StandardMaterial('accentGreen', scene);
    materials.accentGreen.diffuse = new BABYLON.Color3(0.66, 0.78, 0.52); // #a8c686
    materials.accentGreen.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);
    
    materials.blackMatte = new BABYLON.StandardMaterial('blackMatte', scene);
    materials.blackMatte.diffuse = new BABYLON.Color3(0.16, 0.16, 0.16); // #2a2a2a
    materials.blackMatte.specularColor = new BABYLON.Color3(0.05, 0.05, 0.05);
    
    // Glass
    materials.glass = new BABYLON.StandardMaterial('glass', scene);
    materials.glass.diffuse = new BABYLON.Color3(1, 1, 1);
    materials.glass.specularColor = new BABYLON.Color3(0.8, 0.8, 0.8);
    materials.glass.specularPower = 64;
    materials.glass.alpha = 0.3;
    
    // Ceramic for plants
    materials.ceramic = new BABYLON.StandardMaterial('ceramic', scene);
    materials.ceramic.diffuse = new BABYLON.Color3(0.71, 0.65, 0.61); // #b5a69c
    materials.ceramic.specularColor = new BABYLON.Color3(0.2, 0.2, 0.2);
    
    // Plants
    materials.plant = new BABYLON.StandardMaterial('plant', scene);
    materials.plant.diffuse = new BABYLON.Color3(0.4, 0.5, 0.35);
    materials.plant.specularColor = new BABYLON.Color3(0.05, 0.05, 0.05);
    
    return materials;
}