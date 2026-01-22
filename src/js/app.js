document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica de Login ---
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Navegação simples
            window.location.href = 'pages/lista.html';
        });
    }

    // --- Lógica da Lista ---
    const addBtn = document.getElementById('add-btn');
    const input = document.getElementById('new-item-input');
    const listNow = document.getElementById('list-now');

    if (addBtn && input && listNow) {

        // Função para adicionar item
        const addItem = () => {
            const text = input.value.trim();
            if (text === '') return;

            // Criar elemento do item
            const item = document.createElement('div');
            item.className = 'list-item';
            item.textContent = text;

            // Inserir no topo da lista "Agora"
            // requestAnimationFrame para garantir que a transição ocorra se implementarmos depois
            listNow.insertBefore(item, listNow.firstChild);

            // Limpar input
            input.value = '';
            input.focus();
        };

        // Evento clique botão
        addBtn.addEventListener('click', addItem);

        // Evento tecla Enter
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addItem();
            }
        });
    }
});
