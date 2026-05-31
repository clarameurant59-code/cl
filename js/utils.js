// Utility Functions
function updateLoadingProgress(percent) {
    const progressBar = document.getElementById('loading-progress');
    progressBar.style.width = percent + '%';
}

function hideLoadingScreen() {
    const container = document.querySelector('.loading-container');
    setTimeout(() => {
        container.classList.add('hidden');
    }, 500);
}

function formatFloat(value, decimals = 2) {
    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
