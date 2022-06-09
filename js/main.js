function showLoginModal() {
    openModal('login');
}

function showRegisterModal() {
    openModal('register');
}

function openModal(content) {
    document.getElementById('modal_background').style.display = 'block';
    switch(content) {
        case 'login':
            showLoginForm();
            break;
        case 'register':
            showRegisterForm();
            break;
        default: break;
    }
}

function showLoginForm() {
    document.getElementById('login').style.display = 'block';
}

function showRegisterForm() {
    document.getElementById('register').style.display = 'block';
}

function closeModalFromBackground(event) {
    if (event.target.id === 'modal_background') {
        closeModal();
    }
}

function closeModal() {
    document.getElementById('modal_background').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'none';
}