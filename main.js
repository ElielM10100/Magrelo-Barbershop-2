$(document).ready(function () {
    // Configuração do slider do portfólio
    initializePortfolioSlider();
    setupServiceSelection();
    setupBookingFormSubmission();
});

// Função para inicializar o slider do portfólio
function initializePortfolioSlider() {
    const portfolioSlider = $('.portfolio__slider');
    if (portfolioSlider.length) { // Verifica se o elemento existe
        portfolioSlider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    } else {
        console.error("Elemento '.portfolio__slider' não encontrado.");
    }
}

// Função para configurar a seleção de serviços
function setupServiceSelection() {
    const servicoCards = document.querySelectorAll(".servico-card");
    const formAgendamento = document.getElementById("form-agendamento");
    const mensagemContainer = document.getElementById('mensagem');

    if (servicoCards.length > 0) {
        servicoCards.forEach(card => {
            card.addEventListener("click", () => {
                const servico = card.getAttribute("data-servico");
                const preco = card.getAttribute("data-preco");

                // Atualiza os valores no formulário
                document.getElementById("servico-selecionado").value = servico;
                document.getElementById("preco-servico").value = preco;

                // Mostra o formulário de agendamento
                formAgendamento.style.display = "block"; 
                mensagemContainer.classList.add('hidden'); 
            });
        });
    } else {
        console.error("Nenhum serviço disponível para selecionar.");
    }
}

// Função para manipular o envio do formulário de agendamento
function setupBookingFormSubmission() {
    const agendamentoForm = document.getElementById("agendamento-form");
    const mensagemContainer = document.getElementById('mensagem');

    if (agendamentoForm) {
        agendamentoForm.addEventListener('submit', function (event) {
            event.preventDefault(); 

            const nome = document.getElementById('nome').value;
            const telemovel = document.getElementById('telemovel').value;
            const data = document.getElementById('data').value;
            const hora = document.getElementById('hora').value;
            const barbeiro = document.getElementById('barbeiro').value;
            const servico = document.getElementById("servico-selecionado").value;

            // Mensagem de confirmação
            const mensagem = `Agendamento realizado com sucesso!\nNome: ${nome}\nTelemóvel: ${telemovel}\nData: ${data}\nHorário: ${hora}\nBarbeiro: ${barbeiro}\nServiço: ${servico}`;
            
            // Exibe a mensagem de sucesso
            mensagemContainer.innerText = mensagem;
            mensagemContainer.classList.remove('hidden');

            // Limpa o formulário e oculta
            this.reset();
            agendamentoForm.style.display = "none"; 
        });
    } else {
        console.error("Formulário de agendamento não encontrado.");
    }
}

// Variáveis globais e elementos do DOM
const servicoButtons = document.querySelectorAll('.agendar-btn');
const barbeiroContainer = document.querySelector('.barbeiro-container');
const calendarioContainer = document.querySelector('.calendario-container');
const formAgendamento = document.getElementById('formAgendamento');

// Variáveis para armazenar informações do agendamento
let servicoSelecionado = '';
let precoSelecionado = '';

// Evento de clique para os botões de serviço
if (servicoButtons.length > 0) {
    servicoButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            servicoSelecionado = event.target.dataset.servico;
            precoSelecionado = event.target.dataset.preco;
            barbeiroContainer.style.display = 'block'; 
        });
    });
}

// Evento para mudança no select de barbeiro
const barbeiroSelect = document.getElementById('barbeiro-select');
if (barbeiroSelect) {
    barbeiroSelect.addEventListener('change', (event) => {
        if (event.target.value) {
            calendarioContainer.style.display = 'block'; 
        }
    });
}

// Evento de submit do formulário
if (formAgendamento) {
    formAgendamento.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const nome = document.getElementById('cliente-nome').value;
        const telefone = document.getElementById('cliente-telefone').value;
        const email = document.getElementById('cliente-email').value;
        const barbeiro = document.getElementById('barbeiro-select').value;
        const dataHorario = document.getElementById('data-horario').value;

        alert(`Agendamento confirmado!\n\nServiço: ${servicoSelecionado}\nPreço: ${precoSelecionado}\nBarbeiro: ${barbeiro}\nData e Horário: ${dataHorario}\nNome: ${nome}\nTelefone: ${telefone}\nE-mail: ${email}`);

        // Limpa o formulário
        formAgendamento.reset();
        barbeiroContainer.style.display = 'none';
        calendarioContainer.style.display = 'none';
    });
} else {
    console.error("Formulário de agendamento não encontrado.");
}
