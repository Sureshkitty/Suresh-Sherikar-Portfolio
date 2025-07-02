// Navigation buttons
document.getElementById('back').addEventListener('click', function () {
  window.location.href = "portfolio.html";
});

document.getElementById('next').addEventListener('click', function () {
  window.location.href = "contact.html";
});

// "Let's Talk" chat popup
document.getElementById('letsTalk').addEventListener('click', function () {
  alert('Suresh will be online from 9 PM IST to 9:45 PM IST. Kindly join during that time!');

  const iframe = document.createElement('iframe');
  iframe.src = 'https://hack.chat/?Suresh-Sherikar';
  iframe.style.width = '300px';
  iframe.style.height = '400px';
  iframe.style.border = 'none';
  iframe.style.position = 'fixed';
  iframe.style.top = '50%';
  iframe.style.left = '50%';
  iframe.style.transform = 'translate(-50%, -50%)';
  iframe.style.zIndex = '1000';
  iframe.id = 'chat-iframe';

  const closeButton = document.createElement('button');
  closeButton.innerText = 'Close';
  closeButton.style.position = 'fixed';
  closeButton.style.top = 'calc(50% - 210px)';
  closeButton.style.left = '50%';
  closeButton.style.transform = 'translateX(-50%)';
  closeButton.style.zIndex = '1001';
  closeButton.style.padding = '6px 12px';
  closeButton.style.border = 'none';
  closeButton.style.borderRadius = '5px';
  closeButton.style.backgroundColor = '#6c5ce7';
  closeButton.style.color = '#fff';
  closeButton.style.cursor = 'pointer';
  closeButton.id = 'chat-close-btn';

  closeButton.onclick = function () {
    document.body.removeChild(iframe);
    document.body.removeChild(closeButton);
  };

  document.body.appendChild(iframe);
  document.body.appendChild(closeButton);
});

// Show certificate popup
function showCertificatePopup(imgSrc, imgAlt) {
  const overlay = document.createElement('div');
  overlay.id = 'certificate-popup-overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = '2000';
  overlay.style.overflow = 'auto'; // ✅ Allow scrolling

  const popup = document.createElement('div');
  popup.id = 'certificate-popup';
  popup.style.position = 'relative';
  popup.style.maxWidth = '90%';
  popup.style.margin = '20px';
  popup.style.backgroundColor = '#fff';
  popup.style.borderRadius = '8px';
  popup.style.padding = '10px';

  const img = document.createElement('img');
  img.src = imgSrc;
  img.alt = imgAlt || 'Certificate';
  img.style.maxWidth = '100%';
  img.style.height = 'auto';
  img.style.display = 'block';
  img.style.margin = '0 auto';
  img.style.borderRadius = '6px';

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '-10px';
  closeBtn.style.right = '-10px';
  closeBtn.style.fontSize = '24px';
  closeBtn.style.background = '#fff';
  closeBtn.style.border = 'none';
  closeBtn.style.borderRadius = '50%';
  closeBtn.style.width = '40px';
  closeBtn.style.height = '40px';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.2)';

  closeBtn.onclick = function () {
    document.body.removeChild(overlay);
  };

  popup.appendChild(closeBtn);
  popup.appendChild(img);
  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  // Close popup on clicking outside the popup box
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
      document.body.removeChild(overlay);
    }
  });
}

// Apply popup behavior to certificate buttons
document.querySelectorAll('.btn-view-certificate').forEach(function (button) {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    const certImg = button.getAttribute('data-img');
    const certAlt = button.closest('.card').querySelector('h3')?.innerText;

    if (certImg) {
      showCertificatePopup(certImg, certAlt);
    } else {
      alert("Certificate image not available.");
    }
  });
});
