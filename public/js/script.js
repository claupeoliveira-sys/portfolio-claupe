document.addEventListener('DOMContentLoaded', () => {
    const mainHeader = document.getElementById('main-header');
    const contentWrapper = document.getElementById('content-wrapper'); // A nova div que envolve o main

    // Calcula a altura do cabeçalho original para saber quando começar a "colapsar"
    // Usamos o offsetHeight do mainHeader para pegar a altura total, incluindo padding/border
    const headerHeight = mainHeader.offsetHeight; 

    window.addEventListener('scroll', () => {
        // Verifica se o scroll vertical é maior que a altura do cabeçalho original
        // Subtraímos um pouco (ex: 50px) para a transição começar antes do cabeçalho sair completamente da tela
        if (window.scrollY > headerHeight - 50) { 
            document.body.classList.add('header-scrolled');
        } else {
            document.body.classList.remove('header-scrolled');
        }
    });

    // Para as páginas de cases (case1.html, case2.html, case3.html),
    // o cabeçalho já é compacto, então não precisamos dessa lógica de scroll.
    // O script.js será incluído apenas na index.html.
});
