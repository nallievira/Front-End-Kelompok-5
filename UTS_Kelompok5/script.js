let editMode = false;
let uploadedImages = {};

function toggleEditMode() {
    editMode = !editMode;
    const body = document.body;
    const editText = document.getElementById('edit-text');
    
    if (editText) {
        if (editMode) {
            body.classList.add('edit-mode');
            editText.textContent = 'Edit Mode: ON';
        } else {
            body.classList.remove('edit-mode');
            editText.textContent = 'Edit Mode: OFF';
        }
    }
}

function triggerUpload(imageType) {
    if (!editMode) return;
    
    const fileInput = document.querySelector(`input[type="file"][data-image-type="${imageType}"]`);
    
    if (fileInput) {
        fileInput.click();
    } else {
        console.error(`File input for imageType "${imageType}" not found.`);
    }
}

function handleImageUpload(event, imageType) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const container = event.target.closest('.chef, .panada');
        
        if (!container) {
            console.error("Could not find a valid image container.");
            return;
        }

        const placeholder = container.querySelector('.placeholder-image');
        
        if (placeholder) {
            placeholder.remove();
        }
        
        let img = container.querySelector('img');
        if (!img) {
            img = document.createElement('img');
            const uploadOverlay = container.querySelector('.upload-overlay');
            if (uploadOverlay) {
                container.insertBefore(img, uploadOverlay);
            } else {
                container.appendChild(img);
            }
        }
        
        img.src = e.target.result;
        img.alt = `${imageType} image`;
        
        uploadedImages[imageType] = e.target.result;
        
        container.style.transition = 'opacity 0.3s ease-in-out';
        container.style.opacity = '0.5';
        setTimeout(() => {
            container.style.opacity = '1';
            setTimeout(() => {
                 container.style.transition = '';
            }, 300);
        }, 300);
    };
    
    reader.readAsDataURL(file);
}

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.9)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, index * 100);
    });

    const logo = document.querySelector('.central-logo');
    if (logo) {
        logo.style.opacity = '0';
        logo.style.transform = 'translate(-50%, -50%) scale(0.5)';
        
        setTimeout(() => {
            logo.style.transition = 'all 1s cubic-bezier(0.4, 0.0, 0.2, 1)';
            logo.style.opacity = '1';
            logo.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 500);
    }
});

document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    const chili = document.querySelector('.chili');
    const circle = document.querySelector('.circle-accent');
    
    if (chili) {
        chili.style.transform = `rotate(25deg) translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    }
    if (circle) {
        circle.style.transform = `translate(${mouseX * -15}px, ${mouseY * -15}px)`;
    }
});