// Texture Generator - Create realistic textures procedurally
function createWoodTexture(name, scene, isDark = false) {
    const woodTexture = new BABYLON.DynamicTexture(name, 512, scene);
    const ctx = woodTexture.getContext();
    
    // Base color
    const baseColor = isDark ? '#8b6f47' : '#d4a574';
    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, 512, 512);
    
    // Add wood grain
    ctx.strokeStyle = isDark ? '#6b5437' : '#b8945f';
    ctx.lineWidth = 2;
    for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * 512, 0);
        ctx.lineTo(Math.random() * 512, 512);
        ctx.stroke();
    }
    
    // Add texture variation
    const imageData = ctx.getImageData(0, 0, 512, 512);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 20;
        data[i] += noise;
        data[i + 1] += noise * 0.8;
        data[i + 2] += noise * 0.6;
    }
    
    ctx.putImageData(imageData, 0, 0);
    woodTexture.update();
    
    return woodTexture;
}

function createConcreteTexture(name, scene) {
    const concreteTexture = new BABYLON.DynamicTexture(name, 512, scene);
    const ctx = concreteTexture.getContext();
    
    // Base gray
    ctx.fillStyle = '#e8dcc8';
    ctx.fillRect(0, 0, 512, 512);
    
    // Add noise for concrete effect
    const imageData = ctx.getImageData(0, 0, 512, 512);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 40;
        data[i] += noise;
        data[i + 1] += noise;
        data[i + 2] += noise * 0.9;
    }
    
    ctx.putImageData(imageData, 0, 0);
    
    // Add subtle patterns
    ctx.strokeStyle = 'rgba(150, 150, 140, 0.2)';
    for (let i = 0; i < 50; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * 512, Math.random() * 512, Math.random() * 30, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    concreteTexture.update();
    return concreteTexture;
}

function createCeramicTexture(name, scene) {
    const ceramicTexture = new BABYLON.DynamicTexture(name, 256, scene);
    const ctx = ceramicTexture.getContext();
    
    // Base ceramic color
    ctx.fillStyle = '#b5a69c';
    ctx.fillRect(0, 0, 256, 256);
    
    // Add gloss spots
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    for (let i = 0; i < 30; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * 256, Math.random() * 256, Math.random() * 15, 0, Math.PI * 2);
        ctx.fill();
    }
    
    ceramicTexture.update();
    return ceramicTexture;
}
