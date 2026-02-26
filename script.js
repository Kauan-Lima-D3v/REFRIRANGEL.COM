// Remover Loader após carregar
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1500);
});

// Mudar Cor do Fundo no Scroll
window.addEventListener('scroll', () => {
    const secaoProducao = document.querySelector('#producao-detalhe');
    const root = document.documentElement;
    
    if (secaoProducao) {
        const posicao = secaoProducao.getBoundingClientRect().top;

        // Se o usuário chegar na seção de Produção/Galeria
        if (posicao < 350) {
            root.style.setProperty('--bg', '#00050a'); // Cor Premium bem escura
        } else {
            root.style.setProperty('--bg', '#011628'); // Cor Azul Original
        }
    }
}); window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('loader-finish');
    }, 2500); // Tempo da animação da barra

}); document.addEventListener('keydown', (e) => {
    // Se o usuário estiver digitando, não faz nada
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === 'ArrowLeft' && prevBtn) prevBtn.click();
    if (e.key === 'ArrowRight' && nextBtn) nextBtn.click();
});
