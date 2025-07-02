document.getElementById('back').addEventListener('click', function () {
    window.location.href = 'index.html';
});

document.getElementById('next').addEventListener('click', function () {
    window.location.href = 'portfolio.html';
});

document.getElementById('letsTalk').addEventListener('click', function () {
    alert('Suresh will be online from 9 PM IST to 9:45 PM IST. Kindly join during that time!');

    // Create a wrapper to hold both iframe and close button
    const wrapper = document.createElement('div');
    wrapper.style.position = 'fixed';
    wrapper.style.top = '50%';
    wrapper.style.left = '50%';
    wrapper.style.transform = 'translate(-50%, -50%)';
    wrapper.style.zIndex = '1000';
    wrapper.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
    wrapper.style.borderRadius = '8px';
    wrapper.style.overflow = 'hidden';
    wrapper.style.backgroundColor = '#fff';

    // Chat iframe
    const iframe = document.createElement('iframe');
    iframe.src = 'https://hack.chat/?Suresh-Sherikar';
    iframe.style.width = '300px';
    iframe.style.height = '400px';
    iframe.style.border = 'none';

    // Close button
    const closeButton = document.createElement('button');
    closeButton.innerText = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '-10px';
    closeButton.style.right = '-10px';
    closeButton.style.width = '30px';
    closeButton.style.height = '30px';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '50%';
    closeButton.style.backgroundColor = '#6c5ce7';
    closeButton.style.color = '#fff';
    closeButton.style.fontSize = '16px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.zIndex = '1001';
    closeButton.title = 'Close chat';

    closeButton.addEventListener('click', function () {
        document.body.removeChild(wrapper);
    });

    // Append iframe and button to wrapper
    wrapper.appendChild(iframe);
    wrapper.appendChild(closeButton);
    document.body.appendChild(wrapper);
});
