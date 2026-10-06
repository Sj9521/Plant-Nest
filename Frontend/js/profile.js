document.addEventListener('DOMContentLoaded', () => {
    // 1. Guard route: redirect if not logged in
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = '../html/login.html';
        return;
    }

    // 2. DOM Elements: Profile Details
    const nameInput = document.getElementById('profileName');
    const emailField = document.getElementById('profileEmail');
    const phoneField = document.getElementById('profilePhone');
    const editBtn = document.getElementById('editNameBtn');
    const saveBtn = document.getElementById('saveNameBtn');

    // 3. DOM Elements: Sign Out & Modal
    const signOutBtn = document.getElementById('signOutBtn');
    const logoutModal = document.getElementById('logoutModal');
    const cancelLogoutBtn = document.getElementById('cancelLogoutBtn');
    const confirmLogoutBtn = document.getElementById('confirmLogoutBtn');

    // 4. Load stored values
    nameInput.value = localStorage.getItem('name') || 'Plant Lover';
    emailField.textContent = localStorage.getItem('email') || 'Not provided';
    phoneField.textContent = localStorage.getItem('phone number') || 'Not provided';

    // 5. Edit & Save Name
    editBtn.addEventListener('click', () => {
        nameInput.removeAttribute('readonly');
        nameInput.focus();
        editBtn.style.display = 'none';
        saveBtn.style.display = 'inline-block';
    });

    saveBtn.addEventListener('click', () => {
        const updatedName = nameInput.value.trim();
        if (updatedName !== '') {
            localStorage.setItem('name', updatedName);
            nameInput.setAttribute('readonly', 'true');
            saveBtn.style.display = 'none';
            editBtn.style.display = 'inline-block';
            alert('Name updated successfully!');
        } else {
            alert('Name cannot be empty.');
        }
    });

    // 6. Sign Out Modal Controls
    signOutBtn.addEventListener('click', () => {
        logoutModal.style.display = 'flex';
    });

    cancelLogoutBtn.addEventListener('click', () => {
        logoutModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === logoutModal) {
            logoutModal.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && logoutModal.style.display === 'flex') {
            logoutModal.style.display = 'none';
        }
    });

    confirmLogoutBtn.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        window.location.href = '../html/home.html';
    });
});

function goBack() {
    if (document.referrer && document.referrer.indexOf(window.location.host) !== -1) {
        history.back();
    } else {
        window.location.href = '../html/home.html';
    }
}