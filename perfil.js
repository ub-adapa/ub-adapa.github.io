document.addEventListener("DOMContentLoaded", () => {
    const createProfileButton = document.getElementById('create-profile-btn');
    const saveProfileButton = document.getElementById('save-profile-btn');
    const noProfileSection = document.getElementById('no-profile');
    const profileFormSection = document.getElementById('profile-form');
    const profilePic = document.getElementById('profile-pic');
    const uploadPic = document.getElementById('upload-pic');
    const nameInput = document.getElementById('name-input');
    const descriptionInput = document.getElementById('description-input');
    const projectsInput = document.getElementById('projects-input');
    const contactsInput = document.getElementById('contacts-input');

    createProfileButton.addEventListener('click', () => {
        noProfileSection.style.display = 'none';
        profileFormSection.style.display = 'block';
    });

    saveProfileButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const description = descriptionInput.value.trim();
        const projects = projectsInput.value.trim();
        const contacts = contactsInput.value.trim();

        if (name && description && projects && contacts) {
            alert("Perfil guardado exitosamente");
            profileFormSection.style.display = 'none';
            noProfileSection.innerHTML = `<p>Perfil creado. Inicia sesión para usar el foro.</p>`;
            noProfileSection.style.display = 'block';
        } else {
            alert("Por favor, completa todos los campos");
        }
    });

    uploadPic.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            profilePic.src = e.target.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });
});