document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar ul li a');
    const sections = document.querySelectorAll('main section');

    // Função para adicionar/remover a classe 'active' nos links da navegação
    const setActiveNavLink = () => {
        let currentActive = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Ajuste para o offset da navbar
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                currentActive = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentActive)) {
                link.classList.add('active');
            }
        });
    };

    // Adiciona o evento de scroll para atualizar o link ativo
    window.addEventListener('scroll', setActiveNavLink);

    // Adiciona o evento de clique para scroll suave e atualização do link ativo
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Ajuste para o offset da navbar
                    behavior: 'smooth'
                });
            }

            // Atualiza imediatamente o estado ativo após o clique
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Define o link ativo na carga inicial da página
    setActiveNavLink();
});
