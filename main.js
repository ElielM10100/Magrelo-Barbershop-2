// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
    // Exemplo: Adiciona um evento de clique ao botão de agendar corte
    const scheduleButton = document.querySelector('.button__link');
    
    if (scheduleButton) {
        scheduleButton.addEventListener('click', (e) => {
            e.preventDefault(); // Evita o comportamento padrão do link
            // Aqui você pode adicionar lógica para redirecionar ou abrir um modal para agendamento
            alert("Função de agendamento ainda não implementada.");
        });
    }

    // Exemplo: Carrossel simples
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel__slide');
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Mostra o primeiro slide inicialmente
    showSlide(currentIndex);

    // Muda o slide a cada 3 segundos
    setInterval(nextSlide, 3000);
});
    