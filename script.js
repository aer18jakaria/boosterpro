document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.getElementById('video-grid');
    const videoUrlInput = document.getElementById('video-url');
    const addVideoButton = document.getElementById('add-video');
    const videoList = document.getElementById('video-list');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const connectVpnButton = document.getElementById('connect-vpn');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    addVideoButton.addEventListener('click', () => {
        const url = videoUrlInput.value;
        if (url) {
            const listItem = document.createElement('li');
            listItem.textContent = url;
            videoList.appendChild(listItem);
            addVideoToGrid(url);
            videoUrlInput.value = '';
        }
    });

    connectVpnButton.addEventListener('click', () => {
        const server = document.getElementById('vpn-server').value;
        const username = document.getElementById('vpn-username').value;
        const password = document.getElementById('vpn-password').value;
        connectToVpn(server, username, password);
    });

    function addVideoToGrid(url) {
        const iframe = document.createElement('iframe');
        iframe.src = getEmbedUrl(url);
        iframe.allow = 'autoplay; encrypted-media';
        iframe.allowFullscreen = true;
        iframe.addEventListener('load', () => {
            setTimeout(() => {
                iframe.style.borderColor = 'green';
            }, 2000); // Simulate video play start delay
        });
        videoGrid.appendChild(iframe);
    }

    function getEmbedUrl(url) {
        let embedUrl = '';
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            const videoId = url.split('v=')[1] || url.split('/')[3];
            embedUrl = `https://www.youtube.com/embed/${videoId}`;
        } else if (url.includes('facebook.com')) {
            embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}`;
        }
        return embedUrl;
    }

    function connectToVpn(server, username, password) {
        // Placeholder function for VPN connection logic
        // This requires integration with a VPN service provider's API or client

        alert(`Connecting to VPN at ${server} with username ${username}`);
        
        // Example using a hypothetical VPN service provider's API
        // This is just a mock function, actual implementation may vary
        /*
        fetch('https://vpn-service-provider/api/connect', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                server: server,
                username: username,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Connected to VPN');
                // Handle successful VPN connection
            } else {
                alert('Failed to connect to VPN');
                // Handle VPN connection failure
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error connecting to VPN');
        });
        */
    }
});
