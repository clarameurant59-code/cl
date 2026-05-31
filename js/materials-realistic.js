// Realistic Materials Library
let materialLibrary = {};

function createRealisticMaterials(scene) {
    // Wood Materials
    materialLibrary.woodLight = new BABYLON.StandardMaterial('woodLight', scene);
    materialLibrary.woodLight.diffuse = new BABYLON.Color3.FromHexString('#d4a574');
    materialLibrary.woodLight.specularColor = new BABYLON.Color3(0.3, 0.3, 0.3);
    materialLibrary.woodLight.specularPower = 32;
    materialLibrary.woodLight.reflectionTexture = createWoodTexture('woodLightTex', scene);
    
    materialLibrary.woodDark = new BABYLON.StandardMaterial('woodDark', scene);
    materialLibrary.woodDark.diffuse = new BABYLON.Color3.FromHexString('#8b6f47');
    materialLibrary.woodDark.specularColor = new BABYLON.Color3(0.25, 0.25, 0.25);
    materialLibrary.woodDark.specularPower = 24;
    materialLibrary.woodDark.reflectionTexture = createWoodTexture('woodDarkTex', scene, true);
    
    // Wall Materials
    materialLibrary.wall = new BABYLON.StandardMaterial('wall', scene);
    materialLibrary.wall.diffuse = new BABYLON.Color3.FromHexString('#f5f1e8');
    materialLibrary.wall.specularColor = new BABYLON.Color3(0.15, 0.15, 0.15);
    materialLibrary.wall.specularPower = 16;
    
    // Floor Material
    materialLibrary.floor = new BABYLON.StandardMaterial('floor', scene);
    materialLibrary.floor.diffuse = new BABYLON.Color3.FromHexString('#e8dcc8');
    materialLibrary.floor.specularColor = new BABYLON.Color3(0.2, 0.2, 0.2);
    materialLibrary.floor.specularPower = 24;
    materialLibrary.floor.reflectionTexture = createConcreteTexture('floorTex', scene);
    
    // Color Materials
    materialLibrary.sageGreen = new BABYLON.StandardMaterial('sageGreen', scene);
    materialLibrary.sageGreen.diffuse = new BABYLON.Color3.FromHexString('#9ba982');
    materialLibrary.sageGreen.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);
    
    materialLibrary.accentGreen = new BABYLON.StandardMaterial('accentGreen', scene);
    materialLibrary.accentGreen.diffuse = new BABYLON.Color3.FromHexString('#a8c686');
    materialLibrary.accentGreen.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);
    
    materialLibrary.blackMatte = new BABYLON.StandardMaterial('blackMatte', scene);
    materialLibrary.blackMatte.diffuse = new BABYLON.Color3.FromHexString('#2a2a2a');
    materialLibrary.blackMatte.specularColor = new BABYLON.Color3(0.05, 0.05, 0.05);
    materialLibrary.blackMatte.specularPower = 4;
    
    // Glass Material
    materialLibrary.glass = new BABYLON.StandardMaterial('glass', scene);
    materialLibrary.glass.diffuse = new BABYLON.Color3(0.9, 0.9, 0.9);
    materialLibrary.glass.specularColor = new BABYLON.Color3(0.9, 0.9, 0.9);
    materialLibrary.glass.specularPower = 64;
    materialLibrary.glass.alpha = 0.25;
    
    // Ceramic
    materialLibrary.ceramic = new BABYLON.StandardMaterial('ceramic', scene);
    materialLibrary.ceramic.diffuse = new BABYLON.Color3.FromHexString('#b5a69c');
    materialLibrary.ceramic.specularColor = new BABYLON.Color3(0.3, 0.3, 0.3);
    materialLibrary.ceramic.specularPower = 32;
    materialLibrary.ceramic.reflectionTexture = createCeramicTexture('ceramicTex', scene);
    
    // Plant Material
    materialLibrary.plant = new BABYLON.StandardMaterial('plant', scene);
    materialLibrary.plant.diffuse = new BABYLON.Color3(0.4, 0.5, 0.35);
    materialLibrary.plant.specularColor = new BABYLON.Color3(0.05, 0.05, 0.05);
    materialLibrary.plant.specularPower = 8;
    
    return materialLibrary;
}
