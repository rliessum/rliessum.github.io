
document.addEventListener('DOMContentLoaded', () => {
    const jsConfetti = new JSConfetti();

    function animateButton() {
        const button = document.getElementById('downloadButton');
        button.style.animation = 'clickAnimation 0.4s';
        setTimeout(() => {
            button.style.animation = '';
        }, 400);
    }

    window.downloadFile = function() {
        animateButton();
        setTimeout(() => {
            const fileUrl = 'salt_malware.zip'; // Ensure this points to your actual file location
            fetch(fileUrl, {
                method: 'HEAD' // Check if the file exists
            }).then(response => {
                if (response.ok) {
                    window.location.href = fileUrl;
                    jsConfetti.addConfetti();
                } else {
                    console.error('File not found');
                    alert('File not found.');
                }
            }).catch(console.error);
        }, 400);
    }
});
