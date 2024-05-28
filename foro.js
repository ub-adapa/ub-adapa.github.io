document.addEventListener("DOMContentLoaded", () => {
    const forumContent = document.getElementById('forum-content');
    const noProfileMessage = document.getElementById('no-profile-message');
    const postButton = document.getElementById('post-button');
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');
    const postList = document.getElementById('post-list');

    // Simulación de inicio de sesión
    let loggedIn = false;

    // Verificar si el usuario ha iniciado sesión (simulado)
    if (loggedIn) {
        noProfileMessage.style.display = 'none';
        forumContent.style.display = 'block';
    } else {
        noProfileMessage.style.display = 'block';
        forumContent.style.display = 'none';
    }

    // Función para crear un nuevo tema
    postButton.addEventListener('click', () => {
        const title = postTitle.value.trim();
        const content = postContent.value.trim();

        if (title && content) {
            const post = document.createElement('div');
            post.classList.add('post');

            const postTitleElement = document.createElement('h3');
            postTitleElement.textContent = title;

            const postContentElement = document.createElement('p');
            postContentElement.textContent = content;

            post.appendChild(postTitleElement);
            post.appendChild(postContentElement);

            postList.appendChild(post);

            postTitle.value = '';
            postContent.value = '';
        } else {
            alert('Por favor, completa ambos campos antes de publicar.');
        }
    });
});
