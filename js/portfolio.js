document.getElementById('back').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = "about.html"; 
});

document.getElementById('next').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = "achievements.html"; 
});

document.getElementById('letsTalk').addEventListener('click', function() {
    alert('Suresh will be online from 9 PM IST to 9:45 PM IST. Kindly join during that time!');

    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '1000'; 

    const iframe = document.createElement('iframe');
    iframe.src = 'https://hack.chat/?Suresh-Sherikar'; 
    iframe.style.width = '300px'; 
    iframe.style.height = '400px'; 
    iframe.style.border = 'none'; 

    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px'; 
    closeButton.style.right = '10px'; 
    closeButton.onclick = function() {
        document.body.removeChild(modal); 
    };

    modal.appendChild(iframe);
    modal.appendChild(closeButton);
    document.body.appendChild(modal);
});
